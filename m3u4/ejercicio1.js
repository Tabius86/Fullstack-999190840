const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");

item1.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});

item2.addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
});

item3.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});