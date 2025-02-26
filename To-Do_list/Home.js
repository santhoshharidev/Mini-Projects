const inputBox = document.querySelector('.inputBox');
const taskList = document.getElementById("taskList");

inputBox.addEventListener("keyup", function (event) {
    if (event.keyCode == 13) {
        addtasks();
    }
});

function addtasks(){
    if(inputBox.value === ''){
        alert('The Task Box is Empty, Write Something !');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        console.log(li);
        taskList.appendChild(li);
        let close = document.createElement("span");
        close.innerHTML = "\u00d7"
        li.appendChild(close);
    }
    inputBox.value = '';
    saveData();
}

taskList.addEventListener("click",function(click){
    if(click.target.tagName === "LI"){
        click.target.classList.toggle("checked");
        saveData();
    }
    else if(click.target.tagName === "SPAN"){
        click.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",taskList.innerHTML);
}

function retreiveData(){
    taskList.innerHTML = localStorage.getItem("data");
}

retreiveData();