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

/* -------------------------------------------------------------------------------- */
function addClickEventandFetchData() {
  let exerciseListItems = document.querySelector("#exercise-list").children;
  let exerciseDisplay = document.querySelector("#exercise-display");
    let row = "";
  for (let listItem of exerciseListItems) {
    listItem.addEventListener("click", e => {
      let elements = ``;
      fetch1((err, data) => {
        if (err) {
          console.log(err);
        } else {
          for (let obj1 of data) {
            if (e.target.id === obj1.bodyPart) {
                //   console.log(item.workout);
                
                    for (let obj2 of obj1.workout) {
                        // elements += ` <p>Exercise: ${obj2.exercise} Sets: ${obj2.sets} Reps</p>`;
                    row += `
                    <tr>
                        <td>${obj2.exercise}</td>
                        <td>${obj2.sets}</td>
                        <td>${obj2.reps}</td>
                        <td>${obj2.weight}</td>
                    </tr>`
                    }

               
                let table = `
                    <table border=1>
                        <tr>
                            <th>Exercise</th>
                            <th>Sets</th>
                            <th>Reps</th>
                            <th>Weight</th>
                        </tr>
                        ${row}
                    </table>
                `;
             
            //   exerciseDisplay.innerHTML = (exerciseDisplay.children.length == 0) ? elements : " ";
            // elements = "";
              exerciseDisplay.innerHTML = (exerciseDisplay.children.length == 0) ? table : " ";
                row = ""
              break;
            }
          }
        }
      });
    });
  }
}
addClickEventandFetchData();




/* 
function addClickEventandFetchData() {
  let exerciseListItems = document.querySelector("#exercise-list").children;
  let exerciseDisplay = document.querySelector("#exercise-display");

  for (let listItem of exerciseListItems) {
    listItem.addEventListener("click", e => {
      let elements = ``;
      fetch1((err, data) => {
        if (err) {
          console.log(err);
        } else {
          for (let obj1 of data) {
            if (e.target.id === obj1.bodyPart) {
            //   console.log(item.workout);
              for (let obj2 of obj1.workout) {
                elements += ` <p>Exercise: ${obj2.exercise} Sets: ${obj2.sets} Reps</p>`;
              }
              exerciseDisplay.innerHTML = (exerciseDisplay.children.length == 0) ? elements : " ";
              elements = "";
              break;
            }
          }
        }
      });
    });
  }
}

*/