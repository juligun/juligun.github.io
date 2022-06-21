let arrButtons = document.querySelectorAll('.nav li');
arrButtons.forEach(element => {
    element.addEventListener('click', () => pinNavButton(element))
});
arrButtons[0].classList.add('active');

function pinNavButton(element){
    unpinNavButton();
    element.classList.add('active');
}

function unpinNavButton(){
    let elemenet = document.querySelectorAll('.nav .active');
    elemenet[0].classList.remove('active');
}