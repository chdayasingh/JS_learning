console.log('This is clock.js')

function updateClock(){
    let currentTime= new Date();
    
    // Extract hour,minutes,seconds from date
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    
    // single digit to double digit
    currentHour = (currentHour < 10 ? "0" : "") + currentHour;  //number to string
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    // convert to AM/PM
    let timeOfDay = (currentHour < 12) ? 'AM' : 'PM';

    // 24hr-format to 12hr-formar
    currentHour = (currentHour > 12) ? currentHour-12 : currentHour;
    currentHour = (currentHour == 00) ? 12 : currentHour;

    // prepare the time string form hours,minutes and seconds
    let currentTimeStr = currentHour+':'+currentMinutes+':'+currentSeconds+' '+timeOfDay;

    //Insert the time string inside the DOM
    document.getElementById('clock').innerHTML = `<h1>${currentTimeStr}</h1>`
}

updateClock()