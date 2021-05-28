
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-menu');
const body = document.querySelector('body')
const contact = document.getElementById('contact')
const mainTitle = document.getElementById('main-content')
burger.addEventListener('click', () => {
    if (!nav.classList[1]) {
        nav.classList.add('mob-nav-menu')
    } else {
        nav.classList.remove('mob-nav-menu')
    }
})
const naam = document.getElementById('naam')
body.addEventListener('mousemove', changecolor)
function changecolor(e) {
    naam.style.color = "rgb(" + e.offsetX + "," + e.offsetY + ", " + ((e.offsetY + e.offsetX)*3)/2 + ")"
}
const project = document.getElementById('projects-toggle')
const projects = document.getElementById('projects')
project.addEventListener('click', () => {
    if (projects.style.display === 'none') {
        mainTitle.style.display = 'none'
        aboutText.style.display = 'none'
        contact.style.display = 'none'
        projects.style.display = 'flex'
        console.log(projects.classList)

    } else {
        projects.style.display = 'none'
        mainTitle.style.display = 'block'
    }
})

const aboutToggle = document.getElementById('about-toggle')
const aboutText = document.getElementById('about')
aboutToggle.addEventListener('click', () => {
    if (aboutText.style.display === 'none') {
        mainTitle.style.display = 'none'
        projects.style.display = 'none'
        contact.style.display = 'none'
        aboutText.style.display = 'block'
    } else {
        aboutText.style.display = 'none'
        mainTitle.style.display = 'block'
    }
})

const contactToggle = document.getElementById('contact-toggle')
contactToggle.addEventListener('click', () => {
    if (contact.style.display === 'none') {
        mainTitle.style.display = 'none'
        contact.style.display = 'flex'
        projects.style.display = 'none'
        aboutText.style.display = 'none'
    } else {
        contact.style.display = 'none'
        mainTitle.style.display = 'block'
    }
})
const Pcolor = "#8a817c";
const Scolor =" #7b2cbf";
const BGcolor = '#001219';

const lightPcolor = "rgb(52, 52, 52)";
const lightScolor =" #7b2cbf";
const lightBGcolor = '#dad3cf';

const lMode = document.getElementById('l-mode')
const mode = document.getElementById('mode')
const steren = document.querySelectorAll('.shooting_star')
const ster = document.getElementById('animatie-dark')
const pr = document.querySelectorAll('.pr')
const allNav = document.getElementById('nav')
mode.addEventListener('click', () => {
    
    if (lMode.alt === 'sun') {
        lMode.src = './img/moon.png';
        lMode.alt = 'moon'
        body.style.background = lightBGcolor;
        body.style.color = lightScolor;
        ster.style.display = 'none';
        mainTitle.style.color = 'rgb(7, 150, 102)'
        allNav.style.background = lightPcolor;
        allNav.style.boxShadow = '5px 10px 18px rgb(52, 52, 52)';
        allNav.style.borderBottom = 'none'
        pr.forEach(a => {
            a.style.color = lightScolor
        });
    } else {
        lMode.alt = 'sun'
        lMode.src = './img/sunny.svg';
        body.style.background = BGcolor;
        body.style.color = Pcolor;
        ster.style.display = 'block';
        mainTitle.style.color = Pcolor
        allNav.style.background = BGcolor
        allNav.style.boxShadow = 'none';
        allNav.style.borderBottom = '1px solid #7b2cbf'
        pr.forEach(a => {
            a.style.color = Pcolor
        });
    }
})



