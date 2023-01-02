function easyverif(nbCheck){
   if(document.getElementById(nbCheck).checked == true){       
    alert("Good job !");
    }
    else{
        alert("You are mistaken.");
       document.getElementById(nbCheck).checked = false;
    }
}
function incheck(){
var enter1 =document.getElementById("input1").value;
   var enter2 =document.getElementById("input2").value;
}
