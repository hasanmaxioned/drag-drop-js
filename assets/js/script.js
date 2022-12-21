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
      // draggedItem.addEventListener('click', function () {
      //   for (const active of dragBox) {
      //     active.classList.add('active');
      //   }
      // })
      
        // if () {
        //   console.log("span two print");
        // }
        // console.log(valueOfBox);
      // dropHere.forEach (function (drEl) {
      //   if (drEl.getElementsByClassName("drag-box")) {
      //     console.log("hii");
      //   }
      // })
      // dropHere.forEach(function (element, idx) {
      //   let valueOfBox = element.getAttribute('data-value');
      // })

      draggedItem.classList.add('active');
      let abc = draggedItem.querySelectorAll('.active');

      let xyz = draggedItem.getAttribute("data-value");
      console.log(xyz);

      let a = dragBox[0];
      let b = dragBox[1];
      let c = dragBox[2];
      let d = dragBox[3]
      for (let k = 0; k < dropHere.length; k++) {
        if (xyz < c) {
        
          list.append(draggedItem);
          console.log("att value is", xyz);
        }
      }

      
      // console.log(list)
      // list.forEach( function (li) {
      //   console.log(li);
      // })
      // console.log(draggedItem);
      
      list.style.backgroundColor = "rgb(219 184 154)";
      list.style.borderRadius = "10px";

      
      // console.log(draggedItem);
    });

  }

  


  // asynchronus function 
// let a = 10;
// console.log(a);

// setTimeout(() => {
//  console.log("hi hasan"); 
// });

// console.log("hrllo ", a);
