function easyverif(nbCheck){
   if(document.getElementById(nbCheck).checked == true){       
    alert("Good job !");
        document.getElementById('easyverif').submit();
    }
    else{
        alert("You are mistaken.");
    }
}
