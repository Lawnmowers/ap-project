var taskInput = document.getElementById("task-input");
var task = document.getElementById("task");
var submitButton = document.getElementById("submit-button");

taskInput.addEventListener("input", addInput);
submitButton.addEventListener("click", submit);

function addInput() {
  return taskInput.value;
}

function submit(){
  task.innerHTML = addInput();
}