const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Add new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("⚠️ Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.className = "task-item";

  li.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button class="complete-btn">✓</button>
      <button class="delete-btn">✕</button>
    </div>
  `;

  taskList.appendChild(li);
  taskInput.value = "";

  // Complete button
  li.querySelector(".complete-btn").addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete button
  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
  });
}

// Add task on button click
addTaskBtn.addEventListener("click", addTask);

// Add task on Enter key
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
