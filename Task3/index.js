document.querySelector(".top").addEventListener("click",function(){
    document.querySelector(".friends").style.width="25%";
    document.querySelector(".chat-box").style.width="45%";
    document.querySelector(".topro").style.display="unset";
    document.querySelector(".topro").style.width="30%";
})
document.querySelector(".phead svg").addEventListener("click",function(){
    document.querySelector(".topro").style.display="none";
    document.querySelector(".friends").style.width="30%";
    document.querySelector(".chat-box").style.width="70%";
})