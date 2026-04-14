let tasks = [];

// CREATE TASK
function createtask() {
  let input = document.getElementById("taskinput");
  let task = input.value.trim();

  if (task === "") {
    alert("Enter a task");
    return;
  }
  
  tasks.push(task);
  input.value = "";
  displayTasks();
}

// READ TASKS
function Readtask() {
  displayTasks();
}

// DISPLAY FUNCTION (COMMON FOR READ)
function displayTasks() {
  let lists = document.querySelectorAll("#task\\.list");

  lists.forEach(list => {
    list.innerHTML = "";
  });

  tasks.forEach((task, index) => {
    lists.forEach(list => {
      let li = document.createElement("li");
      li.innerHTML = `
        ${task} 
        <button onclick="updatetask(${index})">Edit</button>
        <button onclick="Deletetask(${index})">Delete</button>
      `;
      list.appendChild(li);
    });
  });
}

// UPDATE TASK
function updatetask(index) {
  let newTask = prompt("Update task:", tasks[index]);

  if (newTask !== null && newTask.trim() !== "") {
    tasks[index] = newTask;
    displayTasks();
  }
}

// DELETE TASK
function Deletetask(index) {
  tasks.splice(index, 1);
  displayTasks();
}