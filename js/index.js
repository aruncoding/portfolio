// Nav bar color change on scroll
const naviii = document.querySelector(".navbar")

window.onscroll = function(){
    var top = window.scrollY;
    if(top >= 500){
        naviii.classList.add("active");
    }
    else{
        naviii.classList.remove("active");
    }
}

//element hide
const all = document.getElementById("all");
all.addEventListener('click', function(){
    alert('hi');
    var mockup = document.querySelector(".Mockup").style.display = "none";
    // mockup.style.display = "block";
})


//navbar toggle
const burger = document.getElementById('burger');
const menuu = document.querySelector('.navbar');
burger.onclick = function(){
    burger.classList.toggle('pactive');
    menuu.classList.toggle('pactive');
}
