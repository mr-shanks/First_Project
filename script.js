const PI = 3.14159
let radius ;
let circumfrence ;

 document.getElementById("submitButton").onclick = function (){
    radius = document.getElementById("inputField").value;
    radius = Number(radius);
    circumfrence = 2 * PI * radius ;
    document.getElementById("answerText").textContent = circumfrence + " cm";
 }