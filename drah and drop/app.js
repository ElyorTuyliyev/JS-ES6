let boxs = document.getElementsByClassName("box");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for (box of boxs) {
  box.addEventListener("dragstart", function (e) {
    let select = e.target;
    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    rightBox.addEventListener("drop", function (e) {
      rightBox.appendChild(select);
      select = null;
    });
    leftBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    leftBox.addEventListener("drop", function (e) {
      leftBox.appendChild(select);
      select = null;
    });
  });
}
