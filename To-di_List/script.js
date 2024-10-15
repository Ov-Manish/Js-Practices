const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask() {
    if(inputBox.value === '') {
        alert("You must Write Something");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        // for showing the value in the list : 
        listContainer.appendChild(li);

        let Span=document.createElement("span")
         // for showing the Cross ( X ) in the list : 
        Span.innerHTML="\u00d7";
        li.appendChild(Span);
    }
    inputBox.value='';
    saveData();
}
// checked and deleted icon help to remove the data whihc we entered in the list 
listContainer.addEventListener("click",function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }else if( e.target.tagName === "SPAN"){
       e.target.parentElement.remove();
       saveData();
    }
},false);
// It will store our data in local storage
function saveData() {
    localStorage.setItem("data",listContainer.innerHTML);
}
// it will help to restore the data which we entered before closing the To-Do List
function ShowList() {
    listContainer.innerHTML=localStorage.getItem("data");
}
ShowList();