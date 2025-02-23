function scrollToSection(id) {
  let section = document.getElementById(id);
  section.scrollIntoView();
}

function toggleMenu() {
  let navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
}
