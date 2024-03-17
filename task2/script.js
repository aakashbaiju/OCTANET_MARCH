// script.js
function addTask() {
    var taskName = document.getElementById('taskName').value;
    var priority = document.getElementById('priority').value;
    
    if (taskName.trim() === '') {
      alert('Please enter a task name');
      return;
    }
  
    var taskList = document.getElementById('tasks');
    var taskItem = document.createElement('li');
    taskItem.textContent = taskName;
    taskItem.classList.add('task-item', priority);
    taskList.appendChild(taskItem);
  
    document.getElementById('taskName').value = '';
  }
  
  // You can add more functionality for task management such as marking tasks as complete, setting deadlines, etc.
  