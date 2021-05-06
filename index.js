
let table = document.getElementById("main");
let tbody = table.querySelector("tbody");
let url = window.location.search.split("url=")[1];

var xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onload = e => {

    let data = JSON.parse(e.target.responseText);

    Object.keys(data).forEach(k => {
        let tr = `<tr><td colspan="11" class="group">${data[k].name}</td></tr>`;
        tbody.insertAdjacentHTML("beforeend" , tr);
    
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
        })
    })
}
xhr.send(null);



