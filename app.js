const inputbox = document.querySelector("#inputbox");
const addbutton = document.querySelector("#addButton");
const tasks = document.querySelector(".tasks");

addbutton.addEventListener('click', () => {
    if(inputbox.value.trim().length == ""){
        alert("please enter your tasks!");
    }
    else{

        // create div and class singleTask
        const singleTask = document.createElement("div");
        singleTask.classList.add("singleTask");
        tasks.appendChild(singleTask);

        // create div inside singleTask and class check-text
        const firstIn = document.createElement("div");
        firstIn.classList.add("check-text");
        singleTask.appendChild(firstIn);

        // create input checkbox and class checkbox
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.id = "check";
        firstIn.appendChild(checkbox);

        // create p and class inputText 
        const inputText = document.createElement("p");
        inputText.classList.add("inputText");
        inputText.innerHTML = inputbox.value;
        firstIn.appendChild(inputText);

        // create button and class bin
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("bin");
        deleteButton.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>';
        singleTask.appendChild(deleteButton);

        deleteButton.addEventListener('click', () => {
            deleteButton.parentElement.remove();
        })
    }

    inputbox.value = "";
})
