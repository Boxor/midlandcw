

function newTask(){
    var newDiv = document.createElement("div");
    //Create a new div
    console.log(newDiv);
    //Add "taskStyle" class to the new div
    newDiv.classList.add("taskStyle");

//    newDiv.innerHTML
    var check = "<form> <input type='checkbox'></form>";
    var userTask = document.querySelector("#taskName").value;
    var userTaskDate = document.querySelector("#deadline").value;
    newDiv.innerHTML=check + userTask + "<br>" + "Due Date:" + userTaskDate;
    document.querySelector("#leftSide").appendChild(newDiv);
}

document.querySelector("#newTask").addEventListener("click", function(e){
    e.preventDefault();
    newTask();
});

Document.querySelector("div").addEventListener("checked", function(e){
    e.preventDefault();
});

//function completedTask(){
//    this.
//}