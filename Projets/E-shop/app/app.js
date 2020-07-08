// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyNavBar()};

// Get the navs
let navBar1 = document.getElementById("navbar_1");
let navBar2 = document.getElementById("navbar_2");
// Get the offset position of the navbar
let sticky = navBar2.offsetTop;


// Add the sticky class
function stickyNavBar() {
  if (window.pageYOffset > sticky) {
    navBar1.classList.add("sticky_1");
    navBar2.classList.add("sticky_2");
  } else {
    navBar1.classList.remove("sticky_1");
    navBar2.classList.remove("sticky_2");
  }
}