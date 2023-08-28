

var typed = new Typed('#Learn',{
  strings:["Web Development...!","HTML...!" , "CSS....!" , "Javascript...!" , "React....!"],
  backSpeed: 100,
  backDelay:1000,
  typeSpeed: 100,
  loop:true
});


var navLinks = document.getElementById("navLinks");

function showMenu(){
  navLinks.style.right = "0"
}
function hideMenu(){
  navLinks.style.right = "-200px"
}



