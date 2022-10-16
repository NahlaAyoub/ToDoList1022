//Start :)
console.log("Hello Done Group")

//Function Add
function addTask() {
    //X is A text that entered in textbox 
    var task;
    //get value of textbox
    task = document.getElementById("txtTask").value;
    document.getElementById("txtTask").value = "";
    //test if it is stored correctly
    console.log(task);
    //make a varialble take task and convert it to text node + space
    var taskTxtNode;
    taskTxtNode = document.createTextNode(task + '  ');
    var newElement, newElementBtn, newElementDiv, newElementIcon;

    /***********************/
    //new element to add each node in a list li
    newElement = document.createElement("li")
    //create new attribute "class, id" for created li
    newElement.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2")
    newElement.setAttribute("id", task);

    /*******************/
    //new element to add each node in a list div
    newElementDiv = document.createElement("div")
    //create new attribute "class" for created div
    newElementDiv.setAttribute("class", "d-flex align-items-center")

    /******************/
    //add new element of type button for each button
    newElementBtn = document.createElement("button")
    //create new atrribute "id" for created button and set its value to "btn+task"
    newElementBtn.setAttribute("id", 'btn' + task);

    //create another attribute "onclick" and set its value to function "deleteElement(this)"
    newElementBtn.setAttribute("onclick", 'deleteElement(this)');
    //create another attribute "data-mdb-toggle"
    newElementBtn.setAttribute("data-mdb-toggle", "tooltip");
    //create another attribute "title"
    newElementBtn.setAttribute("title", "Remove item");

    /*************************/
    //new element to add each node in a list icon
    newElementIcon = document.createElement("i")
    //create new attribute "class" for created i
    //class="bi bi-trash" style="color:red"
    newElementIcon.setAttribute("class", "bi bi-trash")
    newElementIcon.setAttribute("style", "color:red")

    //add textNode first then append button to show it on webpage adjesent
    newElementBtn.appendChild(newElementIcon)
    newElementDiv.appendChild(taskTxtNode)
    newElement.appendChild(newElementDiv)
    newElement.appendChild(newElementBtn)
    /* var newElementHr = document.createElement("hr")
     newElementHr.setAttribute("class", "my-4")*/
    //newElement.appendChild(newElementHr)
    //then add them to "Ul List"
    document.getElementById("taskList").appendChild(newElement);
    //document.getElementById("taskList").appendChild(newElementHr);
    //test that reach to the end of function
    console.log("Task Printed");
}

//delete function used to delete the selected id of il 
function deleteElement(id) {

    var item = document.getElementById(id.id).parentElement;
    item.remove();
}