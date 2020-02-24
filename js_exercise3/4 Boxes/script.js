let num=0;
let interval;
let colors=['orange', 'green', 'white', 'red', 'blue'];
let press;

setInterval(function() {
    let r = Math.floor(Math.random()*256);          // Random between 0-255
    let g = Math.floor(Math.random()*256);          // Random between 0-255
    let b = Math.floor(Math.random()*256);          // Random between 0-255
    document.getElementById('two').style.background = `rgb(${r}, ${g}, ${b})`;}, 3000);

function alertok() {
    alert("Greetings Mr. X! Please choose the surprise box...");
    document.querySelector('.container').style.display = "block";
}

function insertText() {
    document.getElementById('oops').innerHTML="Oops something wrong?";
}

document.onkeydown = function() {
    clearInterval(interval);
    press=event;
    interval=setInterval(changeColor, 5000);
}

function changeColor() {
    if (press.keyCode == '38') {
        // up arrow
        num+=1;
    }
    else if (press.keyCode == '40') {
        // down arrow
        num-=1;
    }
    else if (press.keyCode == '37') {
       // left arrow
       num-=1;
    }
    else if (press.keyCode == '39') {
       // right arrow
       num+=1;
    }
    if(num>5)
    {
        num=0;
        document.getElementById('four').style.background = `${colors[num]}`;
    }
    else if(num<0)
    {
        num=4;
        document.getElementById('four').style.background = `${colors[num]}`;
    }
    else
    {
        document.getElementById('four').style.background = `${colors[num]}`;
    }
}