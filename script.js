function fetch1(callback) {
  let request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, JSON.parse(request.responseText));
    } else if (request.readyState === 4) {
      callback(new Error(), undefined);
    }
  });
  request.open("GET", "/workout.json");
  request.send();
}
/* -------------------- */
let exerciseListItems = document.querySelector("#exercise-list").children;
let exerciseDisplay = document.querySelector("#exercise-display");

// for (let listItem of exerciseListItems) {
//   listItem.addEventListener("click", e => {
//     // console.log(e.target.id);
//     toggle();
//   });
// }

// function toggle() {
//   if (exerciseDisplay.children.length === 0) {
//     fetch1(populateContentCallback);
//   } else {
//     exerciseDisplay.innerHTML = "";
//   }
// }

for (let listItem of exerciseListItems) {
  listItem.addEventListener("click", e => {
    let elements = ``;
    fetch1((err, data) => {
      if (err) {
        console.log(err);
      } else {
        for (let item of data) {
          if (e.target.id === item.bodyPart) {
            console.log(item.workout);
            for (let exercise of item.workout) {
              elements += ` <p>${exercise.exercise}</p>`;
            }
              console.log(exerciseDisplay.innerHTML.valueOf());
            exerciseDisplay.innerHTML = (exerciseDisplay.children.length == 0) ? elements : " " ;
            elements = "";
            break;
          }
        }
      }
    });
  });
}

// function populateContentCallback(err, data){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data)
//         for (let i of data) {
//             if (i.bodyPart === "chest") {
//                 console.log(i)
//             }
//         }
//         data[ 0 ].workout.forEach(item => {
//             exerciseDisplay.innerHTML += `
//                           <p>${item.exercise}</p>
//                       `;
//         });
//     }
// }

/* 

let exerciseListItems = document.querySelector("#exercise-list").children;
for (let listItem of exerciseListItems) {
  listItem.addEventListener("click", e => {
    console.log(e.target.id);
    let exerciseDisplay = document.querySelector("#exercise-display");
    if (exerciseDisplay.children.length === 0)
      fetch1((err, data) => {
        if (err) {
          console.log(err);
        } else {
          data[0].workout.forEach(item => {
            exerciseDisplay.innerHTML += `
                          <p>${item.exercise}</p>
                      `;
          });
        }
      });
    else {
      exerciseDisplay.innerHTML = "";
    }
  });
}
*/
