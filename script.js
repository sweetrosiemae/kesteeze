AOS.init({disable: 'mobile'});

//NAV BAR
const nav = document.querySelector('.nav');
const hamburgerIcon = document.querySelector('.fa-bars');

hamburgerIcon.addEventListener('click', function(event){
    displayNav(nav);
    if (event.target.tagName === 'I') {
        updateHamburger(event.target);
    }
})

function displayNav(e){
    e.classList.toggle('showHamMenu');
}

function updateHamburger(iconE){
    iconE.classList.toggle('fa-bars');
    iconE.classList.toggle('fa-window-close');
}

