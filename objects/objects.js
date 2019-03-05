//let obj = {}
// object like an array inside it more than one elemnt with diffrent type 
let obj_me = {
    name: "Sarah",
    age: 29,
    hobbies :['football','knitting'],
    fullName : function (){
        console.log('Sarah Abuhaimed');},
    lastname: 'Abuhaimed'
}

//return each element in the array inside the object with (_)between it
let result = '';
obj_me.hobbies.forEach(function(element)  {
  return result += element+ '_';
});
console.log(result);

//print each id of the objects with it's value
for (let i in obj_me){
    console.log(`${i} : ${obj_me[i]}`);
}
let car_sales = {
  carHas:['make','model', 'year'],
    carCan: ['drive', 'brake', 'park']
}
let result ='';
car_sales.carHas.forEach(function(element)  {
    return result += element+ '_';
  
  });
  car_sales.carCan.forEach(function(element)  {
    return result += element+ '_';
    
  });
  console.log(result);

  let greatestSumMulti = function(){
    var matrix = [
      [08,02,22,97,38,15,00,40,00,75,04,00,07,78,52,12,50,77,91,08],
      [49,49,99,40,17,81,18,57,60,87,17,00,98,43,69,48,04,56,62,00],
      [81,49,31,73,55,79,14,29,03,71,40,67,53,88,30,03,49,13,36,65],
      [52,70,95,23,04,60,11,42,69,24,68,56,01,32,56,71,37,02,36,91],
      [22,31,16,71,51,02,06,09,41,92,36,04,22,40,40,28,66,33,13,80],
      [24,47,32,60,09,03,05,02,44,75,33,53,08,36,04,20,35,17,12,50],
      [32,98,81,28,64,23,67,10,26,38,40,00,59,54,70,66,18,38,04,17],
      [67,26,20,68,02,62,12,20,05,63,94,39,03,08,40,19,66,49,04,21],
      [04,55,58,05,66,73,09,26,07,07,08,08,06,83,14,88,34,89,63,72],
      [21,36,23,09,75,00,76,44,20,45,35,00,00,61,33,97,34,31,33,95],
      [08,17,53,28,02,05,31,67,15,94,03,80,04,62,16,14,09,53,56,92],
      [16,39,05,42,96,35,31,47,55,58,88,24,00,17,54,24,36,29,85,57],
      [86,56,00,48,35,71,89,07,05,44,44,37,44,60,21,58,51,54,17,58],
      [19,80,81,68,05,94,47,69,28,73,92,00,86,52,17,77,04,89,55,40],
      [04,52,08,83,97,35,09,16,07,97,57,32,16,26,26,79,33,27,98,66],
      [88,36,68,87,57,62,20,72,03,46,33,67,46,55,12,32,63,93,53,69],
      [04,42,16,73,38,25,39,11,24,94,72,18,08,46,29,32,40,62,76,36],
      [20,69,36,41,72,30,23,88,34,62,99,69,82,67,59,85,74,04,36,16],
      [20,73,35,29,78,31,90,01,74,31,49,71,48,86,81,16,23,57,05,54],
      [01,70,54,71,83,51,54,69,16,92,33,48,61,43,52,01,89,19,67,48],
    ];
    var result = matrix.reduce(function (prevValue,nextValue) {
        return prevValue + nextValue[3];
    },20);
    console.log(result);
}
greatestSumMulti();
//the correct result 
   let sumPerArr = []

   let greatest = 0



   matrix.forEach(function(element){

       // console.log(element)

       let sum = 0

       element.forEach(function(ele){

           // console.log(ele)

           sum = sum + ele

       })



       if(sum > greatest){

           greatest = sum

       }

       // sumPerArr.push(sum)
   })
   return greatest
}

console.log(greatestSumMulti());
*/
let morse = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    v: '...-',
    x: '-..-',
    y: '-.--',
    z: '--..'
   }
  var firstWord = "ebere is a nice guy but can be a pain sometimes so deal with it";
  let splitFirstWord = firstWord.split('');
  
    for (let j in splitFirstWord){ 

  console.log(`${splitFirstWord} : ${code[j]}`);

  }

var firstWord = "ebere is a nice guy but can be a pain sometimes so deal with it";
let eWord = ""
for(let i = 0; i < firstWord.length; i++){
 if(firstWord.charAt(i) == " "){
   eWord += " "
 }else{
   eWord += morse[firstWord.charAt(i)]
 }
}
console.log(eWord)

//Second one with split
var secondWord = "we love javascript";
let eWordArr = ""
let splitText = secondWord.split("")
for(let i = 0; i < splitText.length; i++){
 if(splitText[i] == " "){
   eWordArr += " "
 }else{
   eWordArr += morse[splitText[i]]
 }
}
console.log(eWordArr)
// solve decode
function morseDecode(message) {

    let result = "";

    message = message.split(" ");



    //loops through the message/ each character

    for (var i= 0; i < message.length; i++) {

        if (message[i]=='') {

            result+= ' ';

        }



        //for every element in key

        for (value in key) {

            //if message equals the value

            if (message[i]==key[value]) {

                result+= value; //add key

            }

        }

    }



    return result;

}





var firstCode= ". -... . .-. .  .. ...  .-  -. .. -.-. .  --. ..- -.--  -... ..- -  -.-. .- -.  -... .  .-  .--. .- .. -.  ... --- -- . - .. -- . ...  ... ---  -.. . .- .-..  .-- .. - ....  .. - ";

console.log('first result-------------');

console.log(morseDecode(firstCode));



var secondCode= "... .- -- ..- . .-..  -- --- .-. ... .  .. -. ...- . -. - . -..  -- --- .-. ... .  -.-. --- -.. .  --- ..- .-.  .. -. ... - .-. ..- -.-. - --- .-.  .... .- ...  - .... .  .- -. ... .-- . .-.  - ---  - .... .  ..- .-.. - .. -- .- - .  --.- ..- . ... - .. --- -.  --- ..-.  .-.. .. ..-. .  - .... .  ..- -. .. ...- . .-. ... .  .- -. -..  . ...- . .-. -.-- - .... .. -. --.  -... ..- -  .. - ...  .-  .-.. .. . ....";

console.log('second result-------------');

console.log(morseDecode(secondCode));
