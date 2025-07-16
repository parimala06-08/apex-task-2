// Form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const errorEl = document.getElementById('error');

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    errorEl.textContent = "Please enter a valid email address.";
  } else {
    errorEl.textContent = "";
    alert("Form submitted successfully!");
    this.reset();
  }
});

// To-Do list functionality
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  
  const task = taskInput.value.trim();
  if (task === '') return;

  const li = document.createElement('li');
  li.textContent = task;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = "Remove";
  removeBtn.onclick = () => li.remove();
  li.appendChild(removeBtn);

  taskList.appendChild(li);
  taskInput.value = '';
}
