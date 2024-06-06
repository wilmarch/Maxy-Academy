function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskList = document.getElementById('taskList');
  var taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Silakan masukkan teks tugas!');
    return;
  }

  var listItem = document.createElement('div');
  listItem.className = 'item todo-item new-task'; 
  listItem.innerHTML = `
    <div class="content">
      <div class="header">${taskText}</div>
      <button class="ui icon button red" onclick="deleteTask(this)">
        <i class="trash alternate outline icon"></i>
      </button>
    </div>
  `;
  taskList.appendChild(listItem);

  taskInput.value = '';
  setTimeout(function() {
    listItem.classList.remove('new-task');
  }, 600); 
}

function deleteTask(button) {
  var listItem = button.closest('.todo-item');
  listItem.classList.add('deleting'); 
  setTimeout(function() {
    listItem.remove();
  }, 300); 
}
