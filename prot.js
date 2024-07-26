/* toogle bar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* scroll sections active links */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(Sec => {
        let top = window.scrollY;
        let offset = Sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
         navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
         });
        };
    });
           /* sticky navbar*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky'. window.scrollY > 100);
 
    /*  remove toogle */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* scroll reveal */

ScrollReveal({
    reset: true,
    distance: '80px',
     duration: 2000,
     delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'  });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 
'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content,  .Skills p, .skills-lists, .heading0', {origin: 'bottom' }); 
/*types js */
const types = new Typed('.multiple-text', {
    strings: ['Software Developer', 'MernStack Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

document.getElementById('read-more-btn').addEventListener('click', function() {
    var additionalContent = document.getElementById('additional-content');
    
    if (additionalContent.style.display === 'none') {
      additionalContent.style.display = 'block';
      this.textContent = 'Read Less';
    } else {
      additionalContent.style.display = 'none';
      this.textContent = 'Read More';
    }
  });

  /*-----------contact google sheet-----------*/
