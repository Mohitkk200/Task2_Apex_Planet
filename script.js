// Form validation
const form = document.getElementById('form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();

  if (!name) {
    formMessage.textContent = 'Name is required.';
    formMessage.style.color = 'red';
    return;
  }

  if (!email) {
    formMessage.textContent = 'Email is required.';
    formMessage.style.color = 'red';
    return;
  }

  // Simple email format check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.style.color = 'red';
    return;
  }

  formMessage.textContent = 'Form submitted successfully!';
  formMessage.style.color = 'green';

  // Reset form after successful submission
  form.reset();
});

// Dynamic To-Do List
const addTaskBtn = document.getElementById('add-task-btn');
const todoInput = document.getElementById('todo-input');
const todoListUl = document.getElementById('todo-list-ul');

addTaskBtn.addEventListener('click', () => {
  const taskText = todoInput.value.trim();
  if (!taskText) return;

  // Create list item
  const li = document.createElement('li');
  li.textContent = taskText;

  // Create delete button
  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.classList.add('delete-btn');
  delBtn.addEventListener('click', () => {
    todoListUl.removeChild(li);
  });

  li.appendChild(delBtn);
  todoListUl.appendChild(li);

  todoInput.value = '';
});
