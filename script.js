const btn = document.querySelector('.form-btn');
const task_section = document.querySelector('.tasks');
const input = document.querySelector('input');


btn.addEventListener('click', addTask);

input.addEventListener('keydown',(event) => {
  if(event.key === 'Enter'){
    event.preventDefault();
    addTask();
  }
});

function addTask(){
  if(input.value === '')return;
  const para = document.createElement('p');
  const para_box = document.createElement('div');

  para.textContent = input.value;
  para_box.appendChild(para);
  para_box.setAttribute('class', 'task')
  task_section.appendChild(para_box);
  input.value = '';

  // let task = document.querySelector('.task');
  para_box.addEventListener('click', () => {
    para_box.setAttribute('class', 'task-finished');
    para_box.addEventListener('click',() => {
      para_box.remove();
    });
  });
}


