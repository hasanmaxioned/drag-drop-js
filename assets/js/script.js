const dragBox = document.querySelectorAll(".drag-box");
const dropHere = document.querySelectorAll(".drop-here");
const startEvent = document.querySelector(".start");
let restartEvent = document.querySelector(".restart");

// console.log(dragBox);
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
  dragBox.forEach((start) => {
    let isEvent = start.setAttribute("draggable", "true");
  });
}

function stop() {
  dragBox.forEach((end) => {
    // console.log(end);
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
    // console.log("dragStart");
    draggedItem = item;
    setTimeout(function () {
      item.style.display = "none";
      // console.log("hi item",item);

    });
  });

  item.addEventListener("dragend", function () {
    // console.log("drag end");
    setTimeout(function () {
      draggedItem.style.display = "block";
      // console.log("hi",draggedItem);
    });
  });

}
for (let j = 0; j < dropHere.length; j++) {
    const list = dropHere[j];
    // console.log("im a deop",list);
    list.addEventListener("dragover", function (e) {
      // console.log("drag box over");
      e.preventDefault();
      list.style.backgroundColor = "rgb(133 131 130)";
      list.style.borderRadius = "10px";
    });

    list.addEventListener("dragenter", function () {
      // console.log("drag box enter");
      list.style.backgroundColor = "rgb(229 29 29 / 24%)";
      list.style.borderRadius = "10px";
    });

    list.addEventListener("dragleave", function () {
      // console.log("box leave");
      list.style.backgroundColor = "rgb(255 239 122 / 63%)";
      list.style.borderRadius = "10px";
    });

    list.addEventListener("drop", function (e) {
      // console.log("drop func run");
      dragBox.forEach(function (element, idx) {
        let valueOfBox = element.getAttribute('data-value');
        console.log(valueOfBox);
      })
      dropHere.forEach (function (drEl) {
        if (drEl.getElementsByClassName("drag-box")) {
          console.log("hii");
        }
      })
      list.append(draggedItem);
      // console.log(draggedItem);
      
      list.style.backgroundColor = "rgb(219 184 154)";
      list.style.borderRadius = "10px";
      console.log(draggedItem);
    });

  }


  // asynchronus function 
// let a = 10;
// console.log(a);

// setTimeout(() => {
//  console.log("hi hasan"); 
// });

// console.log("hrllo ", a);
