/*
alert('Hi Hello');
var fullName = 'Dang Phuong Nam';
alert(fullName);
var weight = 70; //khai báo cân nặng
alert(weight);
/*
alert: hiển thị thông báp trên khi 
console: hiển thị thông báo ví dụ như warning, error,...
confirm: thông báo xác nhận có nút cancel và oke
prompt

var a = 0;
var b = 1;
var c = a + b;
console.log(c);

Toán tử logic
&& - and : cả 2 vế cần đúng trong if
|| - or  : chỉ cần 1 vế đúng dùng trong if
!  - not : phủ định lại điều kiện


if (false) {
    console.log('Dieu kien dung')
}else{
    console.log('Dieu kien sai')
}

function function1(){
    var x = document.getElementById("temp").ariaValueMax;
    if(x<17){
        col1.style.background = "blue";
    }else if(x<37) {
        col1.style.background = "green";
    }else{
        col1.style.background = "orange";
    }
}

*/
function ClickOn1(){
    document.getElementById("backgroud1").style.background = "green"
 }
 function ClickOff1(){
    document.getElementById("backgroud1").style.background = "red"
 }
 function ClickOn2(){
    document.getElementById("backgroud2").style.background = "yellow"
 }
 function ClickOff2(){
    document.getElementById("backgroud2").style.background = "orange"
 }
 
 var tempBlock = document.getElementById('temp');
 var humBlock = document.getElementById('hum');
 var lightBlock = document.getElementById('light');
 
 var temp = tempBlock.innerText;
 var hum = humBlock.innerText;
 var light = lightBlock.innerText;
 
 if (temp > 0 && temp < 10) {
        tempBlock.style.background = "blue";
    }else if( temp < 37) {
        tempBlock.style.background = "green";
    }else{
        tempBlock.style.background = "orange";
    }
if (hum > 0 && hum < 10) {
        humBlock.style.background = "blue";
    }else if( hum < 37) {
        humBlock.style.background = "green";
    }else{
        humBlock.style.background = "orange";
    }
if (light > 0 && light < 10) {
        lightBlock.style.background = "blue";
    }else if( light < 37) {
        lightBlock.style.background = "green";
    }else{
        lightBlock.style.background = "orange";
    }