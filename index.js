
let table = document.getElementById("main");
let tbody = table.querySelector("tbody");
let url = window.location.search.split("url=")[1];
let csvText = "姓名,入會日期,介紹人,關係,居住地,職業,原因,付費學員,一般點名次數,特殊點名次數,總點名次數\n";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onload = e => {
    let data = null;

    try{
         data = JSON.parse(e.target.responseText);
    }catch{
        table.innerHTML = "<h1>無效網頁，請確認連結是否正確</h1>";
    }


    Object.keys(data).forEach(k => {
        let tr = `<tr><td colspan="11" class="group">${data[k].name}</td></tr>`;
        tbody.insertAdjacentHTML("beforeend" , tr);

        csvText += data[k].name + "\n";
    
        let students = data[k].student;
        Object.keys(students).forEach(s => {
            let tr =`<tr>
                        <td>${students[s].name}</td>
                        <td>${students[s].startDate}</td>
                        <td>${students[s].introducer}</td>
                        <td>${students[s].relationship}</td>
                        <td>${students[s].city}</td>
                        <td>${students[s].career}</td>
                        <td class="textarea">${students[s].reason}</td>
                        <td class="boolean">${students[s].money === "true" ? "O" : ""}</td>
                        <td class="number">${students[s].normalNum}</td>
                        <td class="number">${students[s].specialNum}</td>
                        <td class="number">${students[s].specialNum + students[s].normalNum}</td>
                    </tr>`;
            tbody.insertAdjacentHTML("beforeend" , tr);

            csvText += `${students[s].name},${students[s].startDate},${students[s].introducer},${students[s].relationship},${students[s].city},${students[s].career},${students[s].reason.replace(/\n/g,' ')},${students[s].money === "true" ? "O" : ""}, ${students[s].normalNum},${students[s].specialNum},${students[s].specialNum + students[s].normalNum}\n`
        })
    })

    let fileName = () => {
        let date = new Date();
        let y    = date.getFullYear();
        let m    = date.getMonth() + 1;
        let d    = date.getDate();
        return `${y}-${m}-${d}`;
    }

    // Start file download.
    download(`${fileName()}.csv`,csvText);
}
xhr.send(null);

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}




