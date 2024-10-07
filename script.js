let tasks = [];

const taskForm = document.getElementById('taskForm');
const taskTable = document.getElementById('taskTable');

console.log(taskForm);
console.log(taskTable);

taskForm.addEventListener('submit', handleSubmission);

function handleSubmission(event) {
    event.preventDefault();
    // Logic to handle form submission
}
function handleSubmission(event) {
    event.preventDefault();

    // Get form input values
    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDeadline = document.getElementById('taskDeadline').value;

    // Validate input fields
    if (!taskName || !taskDeadline) {
        alert('Task name and deadline are required!');
        return;
    }

    // Update the tasks array
    tasks.push({ name: taskName, description: taskDescription, deadline: taskDeadline });

    // Call render function to update the table
    render();
}

function render() {
    taskTable.innerHTML = tasks.map(task => `
        <tr>
            <td>${task.name}</td>
            <td>${task.description}</td>
            <td>${task.deadline}</td>
            <td><button onclick="markTaskComplete(this)">Complete</button></td>
            <td><button onclick="removeTask(this)">Remove</button></td>
        </tr>
    `).join('');
}
function init() {
    taskTable.innerHTML = ''; // Clear the table
    tasks = []; // Reset the tasks array
    render(); // Call the render function
}

// Call init when the page loads
init();
function markTaskComplete(button) {
    const row = button.parentElement.parentElement;
    row.classList.toggle('completed');  // Toggle a CSS class to mark task as complete
}
function removeTask(button) {
    const rowIndex = button.parentElement.parentElement.rowIndex - 1;  // Get the row index
    tasks.splice(rowIndex, 1);  // Remove the task from the array
    render();  // Re-render the table
}
function render() {
    taskTable.innerHTML = tasks.map((task, index) => `
        <tr>
            <td>${task.name}</td>
            <td>${task.description}</td>
            <td>${task.deadline}</td>
            <td><button onclick="markTaskComplete(this)">Complete</button></td>
            <td><button onclick="removeTask(this)">Remove</button></td>
        </tr>
    `).join('');
}


