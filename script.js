document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById('task-input');
  const addBtn = document.getElementById('add-btn');
  const taskList = document.getElementById('task-list');

  addBtn.addEventListener('click', () => {
    const taskText = input.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
      <span class="task-text">${taskText}</span>
      <button class="remove-btn">Remove</button>
    `;

    li.querySelector('.task-text').addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    li.querySelector('.remove-btn').addEventListener('click', () => {
      li.remove();
    });

    taskList.appendChild(li);
    input.value = '';
  });
});
