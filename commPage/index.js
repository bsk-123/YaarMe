document.querySelector(".autos").addEventListener("click",function(event){
    const ele = event.target;
    var st = ele.innerText;
    document.querySelector("input[type=text]").setAttribute("value",st)
})
var maxReplies=4
var i
for(i=1;i<maxReplies;i++)
{
    var st="r"+i
    document.querySelector("."+st).style.display="none";
}
document.querySelector(".prevbtn").addEventListener("click",function(){
    var ss = document.querySelector(".prevbtn span").innerText;
    if(ss=="Previous"){
        for(i=1;i<maxReplies;i++)
        {
            var st="r"+i
            document.querySelector("."+st).style.display="block";
        }
    document.querySelector(".prevbtn span").innerText="Less";
    }else{
        document.querySelector(".prevbtn span").innerText="Previous";
        for(i=1;i<maxReplies;i++)
        {
            var st="r"+i
            document.querySelector("."+st).style.display="none";
        }
    }
})
