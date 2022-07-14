const tasksArray = [
  {
    description: "Hacer la cama",
    completed: false,
  },
  {
    description: "Hacer el almuerzo",
    completed: false,
  },
  {
    description: "Pasear al perro",
    completed: false,
  },
  {
    description: "Pasear al perro",
    completed: false,
  },
];

let trContainer = document.querySelector(".trContainer");
let html = "";
let total = document.querySelector(".labelTotal");
let finished = document.querySelector(".labelFinished");
let template = (task) => {
  html += `
          <tr>
          <td><label class="taskId">${tasksArray.indexOf(task)}</label></td>
          <td><label class="taskName">${task.description}</label></td>
          <td><button id="${tasksArray.indexOf(
            task
          )}" class="checked" onClick="check(${tasksArray.indexOf(
    task
  )})">Complete</button></td>
          <td><button class="delete" onClick="borrar(${tasksArray.indexOf(
            task
          )})">Delete</button></td>
          </tr>`;
};

window.onload = () => {
  html = "";
  for (task of tasksArray) {
    template(task);
  }
  trContainer.innerHTML = html;
  total.innerHTML = tasksArray.length;

  let finishedTasks = tasksArray.filter((task) => task.completed == true);
  finished.innerHTML = finishedTasks.length;
};

const check = (id) => {
  if (tasksArray[id].completed == false) {
    tasksArray[id].completed = true;
    document.getElementById(id).style.backgroundColor = "green";
  } else {
    tasksArray[id].completed = false;
    document.getElementById(id).style.backgroundColor = "gray";
  }

  let finishedTasks = tasksArray.filter((task) => task.completed == true);
  finished.innerHTML = finishedTasks.length;
};

const borrar = (id) => {
  tasksArray.splice(id, 1);
  html = "";
  for (task of tasksArray) {
    template(task);
  }
  trContainer.innerHTML = html;
  total.innerHTML = tasksArray.length;
};

document.querySelector(".buttonAdd").addEventListener("click", function () {
  let newTaskDescription = document.querySelector(".newTask").value;
  html = "";
  if (
    newTaskDescription === "" ||
    newTaskDescription === undefined ||
    newTaskDescription === null
  ) {
    alert("Ingresar una tarea válida por favor.");
  } else {
    tasksArray.push({ description: newTaskDescription, completed: false });

    for (task of tasksArray) {
      template(task);
    }
    trContainer.innerHTML = html;
    total.innerHTML = tasksArray.length;
  }
});
