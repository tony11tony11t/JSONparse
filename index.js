let data = {"-MXflW_b5BEkr2wcxIYM":{"name":"第一組","student":{"-MXrT1PyP6d5ZIEohPV_":{"career":"2222","city":"4","group":"第一組","id":"-MXrT1PyP6d5ZIEohPV_","introducer":"1111","money":"true","name":"tony","normalNum":7,"reason":"爽阿哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈","relationship":"111","specialNum":3,"startDate":"2021-04-10"},"-MXrVgxBG-jgMssVEp5S":{"career":"2222","city":"4","group":"第一組","id":"-MXrVgxBG-jgMssVEp5S","introducer":"1111","money":false,"name":"5","normalNum":-2,"reason":"爽阿哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈","relationship":"111","specialNum":-5,"startDate":"2021-04-09"},"-MY5fkENxZMKcsnn8Hza":{"career":"2222","city":"4","group":"第一組","id":"-MY5fkENxZMKcsnn8Hza","introducer":"33","money":"true","name":"湯他他","normalNum":4,"reason":"爽阿哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈","relationship":"兄弟","specialNum":2,"startDate":"2021-04-12"},"-MYQGqODEuu5YTjlQ_n_":{"career":"2222","city":"4","group":"第一組","id":"-MYQGqODEuu5YTjlQ_n_","introducer":"1111","money":false,"name":"tony","normalNum":2,"reason":"爽阿哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈","relationship":"兄弟","specialNum":0,"startDate":"2021-04-16"}}},"-MXg79KkOW0I4kpigeDo":{"name":"第二組","student":{"-MXrSZvWqVYwoNJdovAH":{"career":"2222","city":"4","group":"第二組","id":"-MXrSZvWqVYwoNJdovAH","introducer":"1111","money":false,"name":"tony","normalNum":7,"reason":"爽阿哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈","relationship":"111","specialNum":4,"startDate":"undefined-undefined-undefined"},"-MXrUaJvY95whuW-CMQP":{"career":"2222","city":"4","group":"第二組","id":"-MXrUaJvY95whuW-CMQP","introducer":"1111","money":false,"name":"tony","normalNum":2,"reason":"爽阿哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈","relationship":"111","specialNum":1,"startDate":"2021-04-10"},"-MXrVHA7nQJX_z4eejXq":{"career":"2222","city":"4","group":"第二組","id":"-MXrVHA7nQJX_z4eejXq","introducer":"1111","money":false,"name":"唐嘉駿","normalNum":1,"reason":"爽阿哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈","relationship":"111","specialNum":0,"startDate":"2021-04-10"},"-MY3zy2qZws-zijvhRwp":{"career":"2222","city":"4","group":"第二組","id":"-MY3zy2qZws-zijvhRwp","introducer":"1111","money":false,"name":"唐嘉駿","normalNum":2,"reason":"爽阿哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈","relationship":"兄弟","specialNum":1,"startDate":"2021-04-12"},"-MYJyPgaPlvGCD7xAkzt":{"career":"2222","city":"4","group":"第二組","introducer":"1111","money":false,"name":"tony","normalNum":0,"reason":"爽阿哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈","relationship":"兄弟","specialNum":0,"startDate":"2021-04-15"},"-MYL-Na8znDC4DvFPKeW":{"career":"2222","city":"4","group":"第二組","introducer":"1111","money":false,"name":"tony","normalNum":0,"reason":"爽阿哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈","relationship":"兄弟","specialNum":0,"startDate":"2021-04-15"},"-MYQKg-_K4IYvynO5ONe":{"career":"2222","city":"4","group":"第二組","introducer":"1111","money":false,"name":"199","normalNum":0,"reason":"爽阿哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈","relationship":"兄弟","specialNum":1,"startDate":"2021-04-16"}}},"-MZhIeNmsgqkGKme5n6r":{"name":"問我","student":{"-MZhIeREGhzovC9cHs59":{"career":"萬惡歐","city":"嗷嗷嗷","group":"問我","introducer":"哦哦哦","money":false,"name":"字字","normalNum":0,"reason":"萬惡歐昂揚名之商品必須要有心理準備好哦？\n嗷嗷嗷\n因為嗷嗷","relationship":"數額","specialNum":0,"startDate":"2021-05-02"}}}}

let table = document.getElementById("main");
let tbody = table.querySelector("tbody");
let url = "https://firebasestorage.googleapis.com/v0/b/signinproject-d1b3f.appspot.com/o/2021-5-5.json?alt=media&token=0d8df1a0-1b9d-48d4-9682-27936f3a5c55"

var xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onload = responseText => {
    console.log(responseText);
}
xhr.send(null);


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
