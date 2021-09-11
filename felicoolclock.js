var hour = document.querySelector(".hour")
// document here is an object (html document). queryselector is a function, which i pass a string argument
// go and find me an element with class name "hour" in the document
// queryselector is like search, and searches the document for Selectors defined in ()
// i've declared a variable (hour), and assigned the result of document.querySelector to the var
// declaring the var enables me to refer to it later in the code
var minute = document.querySelector(".minute")
var seconds = document.querySelector(".seconds")
var hourcolon = document.querySelector(".hourcolon")
var minutecolon = document.querySelector(".minutecolon")

// declaring the function
function tick(){
    var d = new Date()
    // on the hour object, i have set the innerHTML property to the result of the d.getHour function
    // making sure if hour is single digits, it displays as double digits including 0
    // not necessarily the cleanest way to do it

    var currentHour = d.getHours()
    if (currentHour < 10){
        hour.innerHTML = "0" + currentHour
    } 
    else {
        hour.innerHTML = currentHour
    }
    
    var currentMinute = d.getMinutes()
    if (currentMinute < 10){
        minute.innerHTML = "0" + currentMinute
    }
    else {
        minute.innerHTML = currentMinute
    }
    
    var currentSeconds = d.getSeconds()
    if (currentSeconds < 10){
        seconds.innerHTML = "0" + currentSeconds
    }
    else {
        seconds.innerHTML = currentSeconds
    }
    
    if(hourcolon.style.opacity === "1"){
        hourcolon.style.opacity = 0
    }
    else {
        hourcolon.style.opacity = 1
    }
   
    if(minutecolon.style.opacity === "1"){
        minutecolon.style.opacity = 0
    }
    else {
        minutecolon.style.opacity = 1
    }  

}

// calling the functions. agnostic of function position in code
setInterval(tick,1000)
tick()
