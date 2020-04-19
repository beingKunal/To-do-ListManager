var ulelement = document.querySelector('ul');
ulelement.addEventListener('click', function(e) {
  if (e.target.tagName == 'LI') {
    e.target.classList.toggle('complete');
  }
}, false);

function AddTask(){
var taskname = document.getElementById("addTaskinput").value;
if(taskname.length!=0){
var newItem = document.createElement('li');
newItem.className = "Incomplete";  
newItem.textContent = taskname;
ulTaskList.appendChild(newItem);
    }
else{
    alert("Please enter taskName to add");
    }
document.getElementById("addTaskinput").value = "";
}


function ClearTask(){   
    var elements = document.getElementsByClassName("complete");
    if(elements.length<=0){
        alert("No completed Task In List")
    }
    else{
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    }
}

        
        
        