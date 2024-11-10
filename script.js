function updateDateTime(){
    const dateTimeElement = document.getElementById("datetime");
    const now = new Date();

    const options = {
        weekdays: "long",
        year: "numeric",
        month: "long",
        day : "numeric",
        hour: "numeric",
        minute : "numeric",
        second: "numeric",
        timeZoneName: "short"

    };

    const formattedDateTime = now.toLocateDateString("en-US", options);
    dateTimeElement.textContent = formattedDateTime;
}

function clock(){
    var dhours = document.getElementById("hours");
    var dminutes = document.getElementById("minutes");
    var dseconds = document.getElementById("seconds");
    var ampm = document.getElementById("ampm");
    var optionsdropdown = document.getElementById("options");
    var selectedOption = "24hour"

    var presentTime = new Date();
    var seconds = String(presentTime.getSeconds()).padStart(2,'0');
    var minutes = String(presentTime.getMinutes()).padStart(2,'0');
    var hours = String(presentTime.getHours()).padStart(2,'0');

    dhours.innerHTML = hours;
    dminutes.innerHTML = minutes;
    dseconds.innerHTML = seconds;
    


    optionsdropdown.addEventListener('change',
        (event ) => {
            selectedOption = event.target.value;
        }
    );

    if (selectedOption == "12hour"){
        if (hours >= 12){
            dhours.innerHTML = hours - 12;
            ampm.innerHTML = "PM";
        }
        else {
            ampm.innerHTML = "AM";
        }
        ampm.style.display = "inline";
        dminutes.innerHTML = minutes;
        dseconds.innerHTML = seconds;

    }
    else{
        dhours.innerHTML = hours;
        ampm.style.display = "none"
    }
date()
}

function date(){
    var dmonth = document.getElementById("month");
    var dday = document.getElementById("day");
    var dyear = document.getElementById("year");

    var presentdate = new Date();
    var month = String(presentdate.getMonth()+1);
    var year = String(presentdate.getFullYear());
    var day = String(presentdate.getDate());

    console.log(month);

    const currentDate = new Date()
    if (month == 1){
        month = "January";
    }
    if (month == 2){
        month = "February";
    }
    if (month == 3){
        month = "March";
    }
    if (month == 4){
        month = "April";
    }
    if (month == 5){
        month = "May";
    }
    if (month == 6){
        month = "June";
    }
    if (month == 7){
        month = "July";
    }
    if (month == 8){
        month = "August";
    }
    if (month == 9){
        month = "September";
    }
    if (month == 10){
        month = "October";
    }
    if (month == 11){
        month = "November";
    }

    else {
        month = "December";
    }
    


    dday.innerHTML = day;
    dmonth.innerHTML = month;
    dyear.innerHTML = year;
}

setInterval(clock,1000)

updateDateTime();