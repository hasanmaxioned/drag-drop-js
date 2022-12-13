const dragSpan = document.querySelectorAll(".drag-box");
const dropArea = document.querySelectorAll(".box-layout");
const dragStart = document.querySelector(".start");
const dragStop = document.querySelector(".end");

function startEvent() {
  dragStart.addEventListener("click", () => {
    dragSpan.forEach ( start => {
    let isEvent = start.setAttribute("draggable", "true");
    });
  });
}
startEvent();

function endEvent() {
  dragStop.addEventListener("click", () => {
    dragSpan.forEach( end => {
      let isEventOn = end.setAttribute("draggable", "false");
    });
  });
};
endEvent();



// let elements = document.querySelectorAll("span");

// for (let i = 0, element; (element = elements[i]); i++) {
//   console.log(element);
// }

dropArea.forEach((element) => {
  element.addEventListener("dragover", (event) => {
    event.preventDefault();
    // console.log("dragover event is fire");
  });

  element.addEventListener("drop", (event) => {
    dragSpan.forEach((start) => {
      start.addEventListener("click", (e) => {
                event.target.append(dragSpan);
                console.log(e);

      })
      // let isEvent = start.getAttribute("draggable");
      // if (isEvent == "true") {
      //   event.target.append(start[i]);
      // }
    });

    // console.log(dragSpan);

    // console.log("drop event is fire");
  });
});

// function valueFind() {
//   let elements = document.querySelectorAll("span");
//   for (let i = 0, element; (element = elements[i]); i++) {
//     console.log(element);
//   }
// }