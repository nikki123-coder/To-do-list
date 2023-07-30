const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
     if(inputBox.value==''){
        alert("IT is empty , you should type something to create your list!");

     }
     else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
       li.appendChild(span);
     }
     inputBox.value = " ";
     saveData();

}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
    }
    else if(e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    }
    }, false);
    inputBox.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) { // 13 is the keycode for "Enter"
          event.preventDefault();
          addTask();
        }
    });

    function saveData(){
        localStorage.setItem("data", listContainer.innerHTML);
    }
    function showList(){
        listContainer.innerHTML = localStorage.getItem("data");
    }

    showList();