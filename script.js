var numberOfTasks = 0;

function addTask(form) {
    if (form.taskInput && form.taskInput.value !== ""){
        var newChild = document.createElement("li");
        var newButton = document.createElement("button");
        var referenceNode = document.getElementById("referenceNode");

        newChild.style.margin = "20px 10px";
        newChild.innerHTML = form.taskInput.value;
        newButton.innerText = "Delete";

        newButton.setAttribute("class", "deleteButton");
        newChild.setAttribute("class", "listItem");

        document.getElementById("taskList").insertBefore(newChild, referenceNode);
        document.getElementsByClassName("listItem")[numberOfTasks].appendChild(newButton);

        numberOfTasks++;
        form.reset();
    } 
}

//fix delete button
newButton.addEventListener("click", deleteTask(0, newChild));

function deleteTask(taskNumber, taskItem) {
    taskItem[taskNumber].parentNode.removeChild(taskItem[taskNumber]);
}
