let arrButtons = document.querySelectorAll('.nav li');
let arrSections = document.querySelectorAll('.slide');

window.addEventListener("scroll", 
function () {
    let current = "";

    arrSections.forEach((section) => {
        let sectionTop = section.offsetTop;
        if(this.window.pageYOffset >= sectionTop - 50){
            current = section.getAttribute("id");
        }
    });

    arrButtons.forEach((button) => {
        button.classList.remove("active");
        if(button.classList.contains(current)){
            button.classList.add('active');
        }
    });

}, false);