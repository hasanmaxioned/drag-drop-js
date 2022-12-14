const dragBox = document.querySelectorAll(".drag-box");
const dropHere = document.querySelectorAll(".drop-here");
const startEvent = document.querySelector(".start");
let restartEvent = document.querySelector(".restart");

startEvent.addEventListener("click", function () {
  const initialText = "start";

  if (startEvent.textContent == initialText) {
    startEvent.textContent = "stop";
    start();
  } else {
    startEvent.textContent = initialText;
    stop();
  }
});

function start() {
  dragBox.forEach((element) => {
    let isEvent = element.setAttribute("draggable", "true");
  });
}

function stop() {
  dragBox.forEach((end) => {
    let isEventOn = end.setAttribute("draggable", "false");
  });
}

function restart() {
  restartEvent.addEventListener("click", function () {
    window.location.reload();
  });
}
restart();

let draggedItem;
for (let i = 0; i < dragBox.length; i++) {
  const item = dragBox[i];

  item.addEventListener("dragstart", function () {
    console.log("dragStart");
    draggedItem = item;
    setTimeout(function () {
      item.style.display = "none";
    }, 0);
  });

  item.addEventListener("dragend", function () {
    console.log("drag end");
    setTimeout(function () {
      draggedItem.style.display = "block";
      draggedItem = null;
    }, 0);
  });

  for (let j = 0; j < dropHere.length; j++) {
    const list = dropHere[j];

    list.addEventListener("dragover", function (e) {
      console.log("drag box over");
      e.preventDefault();
    });

    list.addEventListener("dragenter", function (e) {
      console.log("drag box enter");
      e.preventDefault();
      list.style.backgroundColor = "rgb(149 145 145 / 24%)";
      list.style.borderRadius = "10px";
    });

    list.addEventListener("dragleave", function (e) {
      console.log("box leave");
      e.preventDefault();
      list.style.backgroundColor = "rgb(223 215 215 / 24%)";
      list.style.borderRadius = "10px";
    });

    list.addEventListener("drop", function (e) {
      console.log("drop func run");
      list.append(draggedItem);
      list.style.backgroundColor = "#fff";
      list.style.borderRadius = "10px";
    });
  }
}
