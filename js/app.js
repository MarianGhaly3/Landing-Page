/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// build the nav
 
// i made an array to add new link to the nav bar list with the id " menu__links"  once there is new section added to the section 
 

let mainSections = document.querySelectorAll("section");
let index = 0;
    mainSections.forEach ( (section)=>{
    document.getElementById('menu__link').innerHTML+= "<li><a href=\"#"+section.getAttribute('id') +"\">"+section.getAttribute("data-nav")+"</a></li><br>";
    index += 1;
});


// Add class 'your-active-class' to section when in viewport 


let activeSection = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries, observer) => {
   entries.forEach(entry => {
	 if (entry.isIntersecting) {
       entry.target.classList.add('your-active-class');
	  } else {
	   entry.target.classList.remove('your-active-class');
		}
	});
});

Array.prototype.forEach.call(activeSection, (el) => {
	observer.observe(el);
});


// Set section and nav link as active using the IntersectionObserver pattern


let navLinkActive = document.querySelectorAll("#menu__link li a");

window.addEventListener("scroll", event => {
  let navbarlink = window.scrollY +150;

  navLinkActive.forEach(link => {
    let section = document.querySelector(link.hash);

    if (section.offsetTop <= navbarlink &&
      section.offsetTop -50 + section.offsetHeight > navbarlink
    ) {
      link.classList.add("active__link");
    } else {
      link.classList.remove("active__link");
    }
  });
});

// smooth Scroll to section on link click

if (window.getComputedStyle(document.documentElement).scrollBehavior !== 'smooth') {
    document.querySelectorAll('a[href^="#"]').forEach(internalLink => {
     const targetElement = document.querySelector(internalLink.getAttribute('href'));
        if (targetElement) {
            internalLink.addEventListener('click', (e) => {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                });
                e.preventDefault();
            });
        }
    });
}

/*
 * End Main Functions
 * Begin Events
 * 
*/

