alert('Welcome to Samarkand')
let button = document.getElementById('img2').addEventListener('click', colorChange)
let button2 = document.getElementById('img3');
button2.onclick = function () { let rang = document.getElementById('b').className;
document.getElementById('img2').style.display = 'block'
document.getElementById('img3').style.display = ' none'
if (rang == 'body1' ) {
   document.getElementById('b').className = 'rasm'
}
else {

   document.getElementById('b').className = 'body1'
}

 }

function colorChange() {
    let rang = document.getElementById('b').className;
     document.getElementById('img2').style.display = 'none'
     document.getElementById('img3').style.display = ' block'
    if (rang == 'body1' ) {
        document.getElementById('b').className = 'rasm'
    }
    else {

        document.getElementById('b').className = 'body1'
    }

}
let now = new Date()
let hour = now.getHours()
console.log(hour);


if(  hour > 4 && hour <= 10){
    alert('xayrli tong') 
}
 else if(  hour > 10 && hour < 1){
    alert('xayrli kun')
}
 else if (  hour > 2 && hour < 18){
    alert('xayrli  kech')
}
 else {hour > 4 && hour < 10
    alert('xayrli tun')
}
