
//Add new task by pressing the enter key
window.addEventListener("keydown", e => {
    if(e.code==="Enter"){
        addTask();
    }
});


//remove the eventListener when the window unload
window.onunload=window.removeEventListener("keydown", e => {
    if(e.code==="Enter"){
        addTask();
    }
});




// Add new task to the list by clicking
const addTask = () =>{
   //create li
   const li = document.createElement('li');
   li.classList.add('task');

   //create checkmark div inside li
   const checkmarkDIV = document.createElement('div');
   checkmarkDIV.classList.add('checkmark');
   checkmarkDIV.addEventListener('click', e=>completeTask(e.target.parentNode));
   li.appendChild(checkmarkDIV);

   //create the div element inside the checkmark div
   const circleDIV = document.createElement('div');
   const tickDIV = document.createElement('div');
   checkmarkDIV.appendChild(circleDIV);
   checkmarkDIV.appendChild(tickDIV);
   circleDIV.classList.add('circle');
   tickDIV.classList.add('tick');
   
   //create task-content div inside li
   const contentDIV = document.createElement('div');
   contentDIV.classList.add('task-content');
   const inputValue = document.getElementById('add-new-task').value;
   contentDIV.innerHTML = inputValue;
   li.appendChild(contentDIV);

   //add the new li to ul
   const ul = document.getElementsByTagName('ul');
   if(inputValue!==''){
       ul[0].prepend(li);
   }

    // reset input value
    document.getElementById('add-new-task').value= '';   
}

// hide the undo button panel 
const hideUndo = ()=>{
    document.getElementById('undo-btn').classList.add('hidden');
}


// the array of all completed tasks
const hiddenGroup = document.getElementsByClassName('completed');

// remove old tasks
const removeOldTasks = () =>{    
    if(hiddenGroup.length===2){
        hiddenGroup[hiddenGroup.length-1].remove();
    }
}


//Mark clicked task as complete
const completeTask = e =>{

    const parent = e.parentNode;
    parent.classList.add('completed');

    const hideTask= function(){
        parent.classList.add("hidden");
    }
    setTimeout(hideTask, 500);

    const showUndo = function(){
        document.getElementById('undo-btn').classList.remove('hidden');
    }
    
    setTimeout(showUndo, 500);
    setTimeout(hideUndo, 6000);
    removeOldTasks();
}

//undo the complete task action
const showTask = () =>{
    const targetLi = hiddenGroup[0];
    targetLi.classList.remove("hidden");
    targetLi.classList.remove("completed");
    setTimeout(hideUndo, 500);
}


