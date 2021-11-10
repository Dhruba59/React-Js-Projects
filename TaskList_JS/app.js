//Define our UI vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListener();

function loadEventListener() {

  document.addEventListener('DOMContentLoaded', getTaskfromLocalStorage);
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeSingleTask);
  clearBtn.addEventListener('click', clearTasks);
  filter.addEventListener('keyup', filterTask);
  
}





function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a Task');
  }
  
  const li = document.createElement('li');
  li.className = 'collection-item'
  li.appendChild(document.createTextNode(taskInput.value));
  
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);

  taskList.appendChild(li);

  storeTaskInLocalStorage(taskInput.value);

  taskInput.value = '';
  //store in local storage
  

  e.preventDefault();
}





function removeSingleTask(e) {
  
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure ?')) {
      e.target.parentElement.parentElement.remove();
    }
    removeSingleTaskFromLocalStorage(e.target.parentElement.parentElement.textContent);
  }
}

function clearTasks() {
  //taskList.innerHTML = '';
   while (taskList.firstChild) {
     taskList.removeChild(taskList.firstChild);
  }
  //clear from local storage also
  removeTaskFromLocalStorage();
}






function filterTask(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    }
    else {
      task.style.display = 'none';
    }
  });
  
}





function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  }
  else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  
  tasks.push(task);
  localStorage.setItem('tasks' , JSON.stringify(tasks));
}

function removeTaskFromLocalStorage() {
  localStorage.clear();
}





function getTaskfromLocalStorage() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  }
  else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task) {

    const li = document.createElement('li');
  li.className = 'collection-item'
  li.appendChild(document.createTextNode(task));
  
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);

  taskList.appendChild(li);

  })
}





function removeSingleTaskFromLocalStorage(taskItem) {
  let tasks;
  tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.forEach(function (task, index) {
    if (task === taskItem) {
      tasks.splice(index, 1);
    }
      
  })
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
}