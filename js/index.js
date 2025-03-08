// Write a task
/* 

==> Click add button,
--> add the task
--> Delete the task with a red button
--> Update the pendings tasks if the tasks increase or decrease
--> The clear button can delete all the tasks
*/


document.getElementById("addTasks").addEventListener("click", addTasks);
let taskCount = 1;

function addTasks(){
    let textTask = document.getElementById('textTask').value;
    console.log(textTask);

    // Check if the input is empty or not

    if(textTask == ""){
        alert("Please add some text to the task")
    }
    else{
        taskCount ++;
        let newTask = document.createElement('h2');
        newTask.classList.add("task")
        newTask.innerHTML = textTask;
        document.getElementById("taskSection").appendChild(newTask);
        document.getElementById('itemsLeft').innerText = taskCount;
        
    }
       
}

document.getElementById("clearButton").addEventListener('click', deleteTask)
function deleteTask(){

    let allTask = document.querySelectorAll(".task")
    // Having a for loop to delete all of the elements
    if(taskCount < 1){
        console.log("done")
    }
    else{
        taskCount = 0;
        for(let i = 0; i < allTask.length; i++){
            allTask[i].style.display = 'none'
        }
        document.getElementById('itemsLeft').innerText = taskCount;
    
    }
}

