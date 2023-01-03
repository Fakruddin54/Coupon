let a = document.getElementById("code0");
let b = document.getElementById("copy0");
let c = document.getElementById("cont0");

b.onclick = function () {
  navigator.clipboard.writeText(a.innerHTML);
  b.innerHTML = "Copied";
  setTimeout(function () {
    alert("Your Code has been Copied");
    c.remove();
  }, 3000);
};
