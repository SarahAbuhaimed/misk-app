// var allImages = document.querySelectorAll("img");
// //
// var emailForm = document.getElementById("mc_embed_signup");
// //
// var gdi = document.getElementsByClassName("stats");
// //
// var headerHeadline = document.getElementsByClassName("opener");
// //
// var navMenu = document.getElementsByClassName("navigation");
// //
// var logo = document.querySelectorAll(".logo");
// //
// var pressLogo = document.querySelectorAll(".press-logos img");
// //
// var dots = document.getElementsByTagName("circle");


var monkeyElement2 = document.querySelector('h2')



// monkeyElement.style.color = "red"



monkeyElement.style.fontSize = "50px"






// var monkeyImage = document.querySelector('img')

// monkeyImage.setAttribute("src", "https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_960_720.jpg")



// monkeyElement2.textContent = "<i>Lions Paradise</i>"

// monkeyElement.innerHTML = "<i>Lions Paradise</i>"


    let date = new Date();
    let day = daysOfWeek[date.getDay()]
    let year = date.getFullYear()
    let month = monthName[date.getMonth()]
    let dayOfMonth = date.getDate()
    let seconds =date.getSeconds()
    let hours = date.getHours()
    let minutes = date.getMinutes()

   if (seconds < 10 ){
       seconds = "0" +seconds
   }
   if (hours < 10 ){
    hours = "0" +hours
}
if (minutes < 10 ){
    minutes = "0" +minutes
}

    monkeyElement.innerHTML = `${day} ${dayOfMonth} ${month} ${year}, ${hours} : ${minutes} : ${seconds}`
}




