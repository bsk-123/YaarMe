document.querySelector(".see").addEventListener("click",function(){
    document.querySelector(".mc").style.display="inline";
    document.querySelector(".see").style.display="none";
})
var click=0
document.querySelector(".ham").addEventListener("click",function(){
    var val = document.querySelector(".ham-menu").style.transform
    if(val=="translateX(0px)"){
    document.querySelector(".ham-menu").style.transform = "translateX(-500px)" ;
    document.querySelector("body").style.position="unset";
    }
    else{
    document.querySelector(".ham-menu").style.transform = "translatex(0px)"
    document.querySelector("body").style.position="fixed";
}
})
document.querySelector("section").addEventListener("click",function(){
    var val = document.querySelector(".ham-menu").style.transform
    if(val=="translateX(0px)"){
    document.querySelector(".ham-menu").style.transform = "translateX(-500px)" ;
    document.querySelector("body").style.position="unset";
}
})
