var flag=1

document.querySelector(".user input").addEventListener("keydown",function(event){
    var t = event.keyCode
    var v = document.querySelector(".user input").value
    if(v==""){
        flag=0
        document.querySelector(".ui").style.display="none"
        document.querySelector(".uii").style.display="none"
        document.querySelector(".uiii").style.display="none"
        document.querySelector(".sd").style.display="inline-block"
    }else if(v.length==1 && flag==1){
            document.querySelector(".ui").style.display="inline-block"
            document.querySelector(".uii").style.display="inline-block"
            document.querySelector(".uiii").style.display="inline-block"
            document.querySelector(".sd").style.display="none"
            
    }else{
        flag=1
    }
})





   /*var t = event.keyCode
   var v = document.querySelector(".user input").value
    if(t==8){
        if(v.length==1){
            document.querySelector(".ui").style.display="inline-block"
            document.querySelector(".uii").style.display="inline-block"
            document.querySelector(".uiii").style.display="inline-block"
            document.querySelector(".sd").style.display="none"
        }
    }else{
        if(v==""){
            document.querySelector(".ui").style.display="none"
            document.querySelector(".uii").style.display="none"
            document.querySelector(".uiii").style.display="none"
            document.querySelector(".sd").style.display="inline-block"
        }
    }*/
