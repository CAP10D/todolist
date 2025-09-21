let inputText = document.getElementById("todo-input");
let addButton = document.getElementById('addBtn')
let list = document.getElementById("list");
let circle = document.getElementById("circle");

// Add a new todo item
addButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    // Create a new list item
    let newItem = document.createElement("li");
    newItem.innerHTML = `<i class="ri-checkbox-blank-circle-line" id="circle"></i>${inputText.value}<i class="ri-close-fill"></i>`;
    list.appendChild(newItem);
    // Clear the input field
    inputText.value = "";
    saveData();
});

//check and uncheck the circle and remove item

list.addEventListener('click', function(event) {
    if (event.target.classList.contains('ri-checkbox-blank-circle-line')) {
        event.target.classList.toggle('ri-checkbox-circle-line');
        saveData();

    }   else if (event.target.classList.contains('ri-close-fill')) {
        event.target.parentElement.remove();
        saveData();
    }
},false);

// local storage
 function saveData() {
    localStorage.setItem('data',list.innerHTML);
 }

 function showData(){
    list.innerHTML = localStorage.getItem('data');  
 }
    showData();