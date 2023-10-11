document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const completedList = document.getElementById('completedList');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            const completeCheckbox = document.createElement('input');
            completeCheckbox.type = 'checkbox';
            completeCheckbox.onchange = completeTask;

            taskItem.appendChild(completeCheckbox);
            taskList.appendChild(taskItem);

            taskInput.value = '';
        }
    }

    function completeTask() {
        const taskItem = this.parentNode;
        const isChecked = this.checked;

        if (isChecked) {
            taskList.removeChild(taskItem);
            taskItem.classList.add('completed');
            completedList.appendChild(taskItem);

            // Here, you can send the task to WhatsApp (server-side logic required).
        } else {
            completedList.removeChild(taskItem);
            taskItem.classList.remove('completed');
            taskList.appendChild(taskItem);
        }
    }

    // Attach the addTask function to the "Add Task" button
    document.getElementById('addTaskButton').addEventListener('click', addTask);
});
