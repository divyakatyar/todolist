// Selectors
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const taskCount = document.getElementById('count'); // Add a selector for the task count
const completedCount = document.getElementById('completed-count');

let counter = 0; // Initialize the counter variable
let completedCounter = 0; // Initialize the completed counter variable
const tasks = []; // Array to store tasks
const completedTasks = []; // Array to store completed tasks


// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const task = input.value.trim(); // Get the task value

    if (task !== '') {
        addTask(task); // Add task to the list
        input.value = ''; // Clear the input field
        updateTaskCount(1);
        tasks.push(task); // Add task to the tasks array
    }
});

// Function to add a new task to the list
function addTask(task) {
    const li = document.createElement('li');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            completeTask(li, task); // Mark task as completed
        } else {
            uncompleteTask(li, task); // Mark task as uncompleted
        }
    });
    
    li.append(checkbox);
    
    li.append(task);
    todoList.appendChild(li); // Add the task to the list
    // Button to remove the task
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', function() {
        li.remove(); // Remove the task from the list
        updateTaskCount(-1);
    });

    li.appendChild(removeBtn);
    todoList.appendChild(li); // Add the task to the list
}

function completeTask(li, task) {
    li.style.textDecoration = 'line-through'; // Add strikethrough style
    completedTasks.push(task); // Add task to the completed tasks array
    tasks.splice(tasks.indexOf(task), 1); // Remove task from the tasks array
    updateCompletedCount(1); // Update the completed count
}

// Function to mark task as uncompleted
function uncompleteTask(li, task) {
    li.style.textDecoration = 'none'; // Remove strikethrough style
    tasks.push(task); // Add task back to the tasks array
    completedTasks.splice(completedTasks.indexOf(task), 1); // Remove task from the completed tasks array
    updateCompletedCount(-1); // Update the completed count
}
// Function to update the task count
function updateTaskCount(change) {
    counter += change;
    taskCount.textContent = counter;
}

// Function to update the completed count
function updateCompletedCount(change) {
    completedCounter += change;
    completedCount.textContent = completedCounter;
}
