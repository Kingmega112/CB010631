var hamburger = document.querySelector(".ham");
var navlist = document.querySelector(".nav-list");

hamburger.addEventListener("click", function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
})

// navigation bar scroll script 
const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

// faq dropdown script 
const questions = document.querySelectorAll(".question-answer");

questions.forEach(function(question) {
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", function() {
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        })
        question.classList.toggle("show-text");
    })
})

// gallery script 
let list = document.querySelectorAll(".list");
let itemBox = document.querySelectorAll(".itembox");

for (let i = 0; i<list.length; i++){
    list[i].addEventListener("click", function(){
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove("active");
        }
        this.classList.add("active");

        let dataFilter = this.getAttribute("data-filter");

        for(let k = 0; k<itemBox.length; k++){
            itemBox[k].classList.remove("active");
            itemBox[k].classList.add("hide");

            if(itemBox[k].getAttribute("data-item") == dataFilter || dataFilter == "all"){
                itemBox[k].classList.remove("hide");
                itemBox[k].classList.add("active");
            };
        }

    })
}