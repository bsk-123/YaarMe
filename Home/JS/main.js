var elem = document.getElementsByClassName("content");
for (var i = 0; i < elem.length; i++) {


    console.log(elem[i].innerHTML.length);
    if (elem[i].innerHTML.length > 700) {
        // elem[i].innerHTML  = "length";
    }
    // elem[i].onclick = function(){
    //     if(this.innerHTML === "see less"){
    //         this.previousSibling.style.display = "none";
    //         this.innerHTML = "... see more";
    //     }
    //     else{
    //         this.previousSibling.style.display = "inline";
    //         this.innerHTML = "see less";
    //     }
    // }
}

var blurBackground = function () {
    document.querySelector(".sidebar").style.boxShadow = '0px 0px 20px 5000px #00000094';
    document.querySelector(".container").style.pointerEvents = 'none';
    document.querySelector(".mobile-header").style.pointerEvents = 'none';
    document.querySelector(".mobile-nav-bar").style.pointerEvents = 'none';
}
var removeBlurBackground = function () {
    document.querySelector(".sidebar").style.boxShadow = 'none';
    document.querySelector(".container").style.pointerEvents = 'auto';
    document.querySelector(".mobile-header").style.pointerEvents = 'auto';
    document.querySelector(".mobile-nav-bar").style.pointerEvents = 'auto';
}


// sidebar open
document.querySelector(".mobile-header .me-icon").addEventListener("click", function () {
    var sidebar = document.querySelector(".sidebar")
    sidebar.style.left = 0;
    sidebar.style.top = 0;

    // blur background
    blurBackground();
})

// sidebar close
document.querySelector(".container-wrap").addEventListener("click", function () {
    var sidebar = document.querySelector(".sidebar")
    sidebar.style.left = "";
    sidebar.style.top = "";

    // unblur background
    removeBlurBackground();
})


document.querySelector('.sidebar').addEventListener('touchmove', function (e) {
    e.preventDefault();
}, false);

document.querySelector(".sidebar .down").addEventListener("click", function () {
    this.classList.toggle("rotate-arrow")
})

document.querySelector(".expand-add-acc").addEventListener("click", function () {
    document.querySelector(".all-uls").classList.toggle("show-add-acc")
})

