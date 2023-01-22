// FAQ Expand/Collapse

function toggleElement(id) {
  if (document.getElementById(id).style.display == 'none') {
    document.getElementById(id).style.display = '';
  } else {
    document.getElementById(id).style.display = 'none';
  }
}

// year

const d = new Date();
let year = d.getFullYear();
document.getElementById("demo").innerHTML = year;

// full page pop-up
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
