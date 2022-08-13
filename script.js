console.log("ssss")

var createPass = document.getElementById("pass");


function generatorPass(){
var chars = "0123456789abcdefghijklmnopqrstuvxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var passlenght = 12;
var pass = "";


for (var i = 0 ; i<= passlenght;i++){
    var randnum= Math.floor(Math.random()* chars.length);
    pass += chars.substring(randnum , randnum+1);
}
// now apllay it
document.getElementById("pass").value = pass;
}

// now active copy button of copoost



function copypass() {
    var pass = document.getElementById("pass"); 
    pass.select();
    let textvalue = pass.value;
    

    navigator.clipboard.writeText(textvalue);
}




