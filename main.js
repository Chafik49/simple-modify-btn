var form = document.getElementById("form"),
    myInput = document.getElementById("input"),
    add = document.getElementById("add"),
    save = document.createElement("span"),
    saveText  = document.createTextNode("Save"),
    section = document.getElementById("section");
window.onload = function(){
    myInput.focus();
}
add.onclick = function(){
    var myElement = document.createElement("div"),
        myPar = document.createElement("p"),
        myParText = document.createTextNode(myInput.value),
        modifBtn = document.createElement("span"),
        modifText = document.createTextNode("Modify");

    if(myInput.value !=""){
        section.appendChild(myElement);
        myElement.appendChild(myPar);
        myPar.appendChild(myParText);
        myElement.appendChild(modifBtn);
        modifBtn.appendChild(modifText);
        myInput.value="";

    }

    modifBtn.onclick = function(){
        
        myElement.removeChild(modifBtn);
        add.style.display="none";
        form.appendChild(save);
        save.appendChild(saveText);
        myInput.focus();
        myInput.value=myPar.textContent; 
    
        


    save.onclick = function(){
        form.removeChild(save);
        if(myInput.value!=""){
            myPar.textContent=myInput.value;
        }
        
        add.style.display="block";
        myInput.value="";
        myElement.appendChild(modifBtn);
    }
}
}