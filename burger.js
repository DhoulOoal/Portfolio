var theburger = document.querySelector(".burger");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

theburger.addEventListener("click", function() {
    this.classList.toggle("click");
    navlist.classList.toggle("open");
});