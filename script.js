const inputbox =document.getElementById("input-box")
const  listcontainer =document.getElementById("listcontainer")

function addTask(){
    if(inputbox.value === ''){
        alert("you must write something!")
    }
       
    else{
        let li=document.createElement("li")
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);

           //  for the cross icon when we have to delete the task   
  let span = document.createElement("span"); 
   span.innerHTML="\u00d7";
  li.appendChild(span);
    }
    inputbox.value= "";
    saveData();


}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveDta();  /** data stored in the browser */

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


// data stored in the browser
function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML)
}


// if we even refresh the page the todo list will not be clear!
function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showTask();
