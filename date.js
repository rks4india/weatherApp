
// document.getElementById("day").innerHTML = "Rahul";

    var d = new Date();
    var weekday = new Array(7);
    var month = new Array(12);

    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var day = weekday[d.getDay()];
    var mon = month[d.getMonth()];


document.getElementById("day").innerHTML = day + ", ";
document.getElementById("date").innerHTML = d.getDate() + ",  ";
document.getElementById("month").innerHTML = " " + mon;
document.getElementById("year").innerHTML = d.getFullYear();

console.log(day, d.getDate(), mon, d.getFullYear());