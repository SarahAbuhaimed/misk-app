var monkeyElement = document.querySelector('.analogue_clock')



var secondHand = document.querySelector('#seconds')

var minHand = document.querySelector('#minutes')

var hourHand = document.querySelector('#hour')



let daysOfWeek = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]



let monthName = ["January","February", "March"]



setInterval(time, 1000)





function time(){

    let date = new Date()

    let day = daysOfWeek[date.getDay()]

    let year = date.getFullYear()

    let month = monthName[date.getMonth()]

    let dayOfMonth = date.getDate()

    let hours = date.getHours()

    let seconds = date.getSeconds()

    let Minutes = date.getMinutes()

    

    if(seconds < 10){

        seconds = "0" + seconds

    }



    if(hours < 10){

        hours = "0" + hours

    }



    if(Minutes < 10){

        Minutes = "0" + Minutes

    }



    let analogue_seconds = 6 * seconds

    let analogue_min = Minutes * 6

    let analogue_hour = hours * 30 //+ (Minutes/2)





    secondHand.style.transform = "rotate("+ analogue_seconds +"deg)"



    minHand.style.transform = "rotate("+ analogue_min +"deg)"



    hourHand.style.transform = "rotate("+ analogue_hour +"deg)"

    // monkeyElement.innerHTML = `${day} ${dayOfMonth} ${month} ${year}, ${hours} : ${Minutes} : ${seconds}`

}
