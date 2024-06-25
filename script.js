const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Enter the task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        //a=Adding cross icon
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";

        //display cross icon
        li.appendChild(span);

    }
    inputBox.value = "";

    //whenever the new task is added, it will call the list of task 
    saveData();
}

//to check and uncheck the task and delete the task

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//to save the task in local storage
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

//to view the list of task on the browser
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
//call the function
showTask();