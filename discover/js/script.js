
//initial modal
var modal = document.getElementById("initiation");
var span = document.getElementsByClassName("close")[0];
var discover = document.getElementById("discover-logo");

window.onload = function() {
  modal.style.display = "block";

}
span.onclick = function() {
  modal.style.display = "none";

}
discover.onclick = function() {
  modal.style.display = "block";
}

//scroll top!
document.body.onload = function(){
  document.documentElement.scrollTop = 1723;
  document.documentElement.scrollLeft = 870;
}



//angel hover
function angelHover() {
  document.getElementById("angelhover").style.color = "var(--col-02)";
  document.getElementById("angelhover1").style.color = "var(--col-02)";
  document.getElementById("angelhover2").style.color = "var(--col-02)";
  document.getElementById("angelhover3").style.color = "var(--col-02)";
  document.getElementById("angelhover4").style.color = "var(--col-02)";
  document.getElementById("angelhover5").style.color = "var(--col-02)";
}
function angelHoverEnd() {
  document.getElementById("angelhover").style.color = "var(--col-01)";
  document.getElementById("angelhover1").style.color = "var(--col-01)";
  document.getElementById("angelhover2").style.color = "var(--col-01)";
  document.getElementById("angelhover3").style.color = "var(--col-01)";
  document.getElementById("angelhover4").style.color = "var(--col-01)";
  document.getElementById("angelhover5").style.color = "var(--col-01)";
}