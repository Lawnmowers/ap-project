function addTask(form) {
    if (form.taskInput){
        var newChild = document.createElement("li");
        var divider = document.createElement("hr");
        var referenceNode = document.getElementById("referenceNode");

        newChild.innerHTML = form.taskInput.value;
        document.getElementById("taskList").insertBefore(newChild, referenceNode);
        document.getElementById("taskList").insertBefore(divider, referenceNode);
        form.reset();
    } 
}
