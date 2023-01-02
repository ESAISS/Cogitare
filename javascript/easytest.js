function easyverif(nbCheck){
   if(document.getElementById(nbCheck).checked == true){       
    alert("Good job !");
    }
    else{
        alert("You are mistaken.");
       document.getElementById(nbCheck).checked = false;
    }
}
function in1check(){
var enter1 =document.getElementById("jesuis").value;
   if (enter1 == "I am") {
   alert("Good job !");
   }
    else{
        alert("You are mistaken.");
    }
}

function in2check(){
var enter2 =document.getElementById("have").value;
    if (enter2 == "am") {
   alert("Good job !");
   }
    else{
        alert("You are mistaken.");
    }
}
