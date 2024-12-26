const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

document.addEventListener("DOMContentLoaded", loadTasks);


addTaskBtn.addEventListener('click', addTask);


taskInput.addEventListener('keypress', (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});


function addTask() {
  const task = taskInput.value.trim();
  if (task !== "") {
    const li = document.createElement('li');
    li.textContent = task;

    
    const completeBtn = document.createElement('button');
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener('click', () => markCompleted(li));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => deleteTask(li));

   
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

  
    taskList.appendChild(li);

  
    taskInput.value = '';

   
    saveTasks();
  }
}


function markCompleted(task) {
  task.classList.toggle('completed');
  saveTasks();
}


function deleteTask(task) {
  task.remove();
  saveTasks();
}


function saveTasks() {
  const tasks = [];
  const taskItems = taskList.querySelectorAll('li');
  taskItems.forEach(item => {
    tasks.push({
      text: item.textContent.replace("CompleteDelete", "").trim(),
      completed: item.classList.contains('completed')
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.text;
    if (task.completed) li.classList.add('completed');

    
    const completeBtn = document.createElement('button');
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener('click', () => markCompleted(li));

   
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => deleteTask(li));

   
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

   
    taskList.appendChild(li);
  });
}
