var cvButton = document.getElementById("cv-bton");
var cvList = document.getElementById("list");

cvButton.addEventListener("click", function (event) {
  event.preventDefault();
  cvList.classList.toggle("show");
});
window.addEventListener("scroll", function () {
  cvList.classList.remove("show");
});
window.addEventListener("click", function (event) {
  if (event.target != cvButton && !cvList.contains(event.target))
    cvList.classList.remove("show");
});
