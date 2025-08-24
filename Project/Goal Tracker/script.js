const calendar = document.getElementById("calendar");
const monthYear = document.getElementById("monthYear");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const selectedDateDisplay = document.getElementById("selected-date");
const goalInput = document.getElementById("goalText");
const addGoalBtn = document.getElementById("addGoal");
const goalList = document.getElementById("goalList");

let currentDate = new Date();
let selectedDate = null;
let goals = JSON.parse(localStorage.getItem("goals")) || {}; // store goals

function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  monthYear.textContent = currentDate.toLocaleString("default", { month: "long", year: "numeric" });

  calendar.innerHTML = "";

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  // Empty slots for days before start of month
  for (let i = 0; i < firstDay; i++) {
    const emptyDiv = document.createElement("div");
    calendar.appendChild(emptyDiv);
  }

  for (let day = 1; day <= lastDate; day++) {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day");
    dayDiv.textContent = day;

    const dateKey = `${year}-${month + 1}-${day}`;
    if (goals[dateKey] && goals[dateKey].length > 0) {
      dayDiv.style.background = "#a7f3d0"; // greenish if goal exists
    }

    dayDiv.addEventListener("click", () => {
      document.querySelectorAll(".day").forEach(d => d.classList.remove("selected"));
      dayDiv.classList.add("selected");
      selectedDate = dateKey;
      selectedDateDisplay.textContent = dateKey;
      loadGoals(dateKey);
    });

    calendar.appendChild(dayDiv);
  }
}

function loadGoals(dateKey) {
  goalList.innerHTML = "";
  if (goals[dateKey]) {
    goals[dateKey].forEach((goal, index) => {
      const li = document.createElement("li");
      li.textContent = goal.text;
      if (goal.completed) li.classList.add("completed");

      const toggleBtn = document.createElement("button");
      toggleBtn.textContent = goal.completed ? "Undo" : "Done";
      toggleBtn.style.marginLeft = "10px";
      toggleBtn.onclick = () => {
        goals[dateKey][index].completed = !goals[dateKey][index].completed;
        saveGoals();
        loadGoals(dateKey);
        renderCalendar();
      };

      li.appendChild(toggleBtn);
      goalList.appendChild(li);
    });
  }
}

addGoalBtn.addEventListener("click", () => {
  if (selectedDate && goalInput.value.trim() !== "") {
    if (!goals[selectedDate]) goals[selectedDate] = [];
    goals[selectedDate].push({ text: goalInput.value, completed: false });
    goalInput.value = "";
    saveGoals();
    loadGoals(selectedDate);
    renderCalendar();
  } else {
    alert("Please select a date first!");
  }
});

function saveGoals() {
  localStorage.setItem("goals", JSON.stringify(goals));
}

prevBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
