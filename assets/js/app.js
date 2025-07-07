// Arreglo inicial con 3 tareas
let tasks = [
    { id: 1, description: "Estudiar JavaScript", completed: false },
    { id: 2, description: "Hacer ejercicio", completed: true },
    { id: 3, description: "Leer un libro", completed: false }
];

const taskList = document.getElementById("taskList");
const totalSpan = document.getElementById("total");
const completedSpan = document.getElementById("completed");

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.className = task.completed ? "completed" : "";
        li.innerHTML = `
            <span>${task.description}</span>
            <div>
                <button onclick="toggleTask(${task.id})">✔️</button>
                <button onclick="deleteTask(${task.id})">🗑️</button>
            </div>
        `;
        taskList.appendChild(li);
    });
    updateSummary();
}

function addTask() {
    const input = document.getElementById("taskInput");
    const description = input.value.trim();
    if (description !== "") {
        const newTask = {
            id: Date.now(),
            description,
            completed: false
        };
        tasks.push(newTask);
        input.value = "";
        renderTasks();
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function toggleTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
    }
}

function updateSummary() {
    totalSpan.textContent = tasks.length;
    completedSpan.textContent = tasks.filter(task => task.completed).length;
}

document.addEventListener("DOMContentLoaded", renderTasks);
