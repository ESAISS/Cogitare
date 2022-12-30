function easyverif(nbCheck){
   if(document.getElementById(nbCheck).checked == true){       
    alert("Good job !");
    }
    else{
        alert("You are mistaken.");
       document.getElementById(nbCheck).checked = false;
    }
}
