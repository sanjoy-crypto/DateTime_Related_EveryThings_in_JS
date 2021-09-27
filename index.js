let btn = document.querySelector('button')
let output = document.querySelector('h2')

btn.addEventListener('click', () => {
    let today = new Date();

    let month = today.getMonth() + 1;
    let date = today.getDate();
    let year = today.getFullYear();

    let today_date = `${month}/${date}/${year}`
    // output.innerHTML = today_date

    let hour = addZero(today.getHours())
    let minute = addZero(today.getMinutes())
    let second = addZero(today.getSeconds())

    let today_time = `${hour}:${minute}:${second}`
    // output.innerHTML = today_time

    let day = today.getDay();
    // output.innerHTML = day

    // let time = new Date().toLocaleString();
    // let time = new Date().toLocaleDateString();
    // let time = new Date().toLocaleTimeString();
    // output.innerHTML = time




})

function addZero(num) {
    return num < 10 ? `0${num}` : num
}


// setInterval(updateTime, 1000)
// function updateTime() {
//     output.innerHTML = new Date().toLocaleTimeString();
// }





let today = new Date()
let month = today.getMonth()

// output.innerHTML = getMonthName(month)

function getMonthName(monthNumber) {
    let monthName = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    return monthName[monthNumber]
}




let days = new Date()
let day = days.getDay();

output.innerHTML = getDayName(day)

function getDayName(daynumber) {
    let daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return daysName[daynumber]
}