

// var li = document.createElement("li")

// //<li></li>

// console.log(li)

// var text = document.createTextNode("List me") //List me

// console.log(text)

// li.appendChild(text)

// //<li>List me</li>

// console.log(li)



// creator.appendChild(li)

// console.log(creator)



// let img2 = document.createElement("img")

// //<img />

// img2.setAttribute("src", "https://i.ytimg.com/vi/O6gkm-nklyw/maxresdefault.jpg")

// //<img src="https://i.ytimg.com/vi/O6gkm-nklyw/maxresdefault.jpg" />



// img2.setAttribute("width", "20%")



// creator.appendChild(img2)
var creator = document.querySelector('.creator')

 function createTable() {
creator.innerHTML=""
    let row = document.querySelector("#row").value
    let col = document.querySelector("#col").value
    let table = document.createElement("table")

    for (let i = 0; i < row; i++) {
        let tr = document.createElement("tr")
        for (let j = 0; j < col; j++) {
 
            let td = document.createElement("td")
            let textNode = document.createTextNode(i + ", " + j)
            td.setAttribute("onclick","style = 'background-color:red'");
            td.appendChild(textNode)
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    creator.appendChild(table)
 }


document.querySelector('h1').addEventListener("click".function(){
    
})
