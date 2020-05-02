var taskList = document.getElementById("taskList");
var taskNumber = 0;

submitButton.addEventListener("click", addTask(form));


function addTask(form) {
    if (form.taskInput && form.taskInput.value !== "") {
        var newChild = document.createElement("li");
        var newButton = document.createElement("button");
        var referenceNode = document.getElementById("referenceNode");

        newChild.style.margin = "20px 10px";

        newButton.setAttribute("class", "deleteButton");
        newChild.setAttribute("class", "listItem");

        newButton.innerText = "Delete";
        newChild.innerHTML = form.taskInput.value;

        taskList.insertBefore(newChild, referenceNode);
        document.getElementsByClassName("listItem")[taskNumber].appendChild(newButton);
       
        taskNumber++;
        form.reset();
    } 
}

taskList.addEventListener("click", deleteButton);

function deleteButton(event) {
    if (event.target.className !== "deleteButton") {
        return;
    }

    taskNumber--;
    event.target.parentElement.remove();
}

taskList.addEventListener("click", completeTask);

function completeTask(event) {
    if (event.target.matches("button") || event.target.className !== "listItem") {
        return;
    }

    if (event.target.style.opacity == 1) {
        event.target.style.opacity = 0.5;
        event.target.style.textDecoration = "line-through";
    } else {
        event.target.style.opacity = 1;
        event.target.style.textDecoration = "none";
    }
}
