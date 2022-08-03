window.addEventListener("load", () => {
    console.log("start js");

    //Selectors
    const inputFormTask = document.querySelector("#form12");
    const buttonAddTask = document.querySelector(".btn-primary");
    const taskList = document.querySelector('.task-list');

    //functions
    function checkTask(taskLi) {
        taskLi.classList.add("done");
    }

    function closeTask(task) {
        task.remove()
    };

    function generateTask (task) {
        const li = document.createElement("li");
        const imgClose = document.createElement("img");
        const imgCheck = document.createElement("img");
        const p = document.createElement("p");
        
        li.setAttribute("class", "task-item");
        imgClose.setAttribute("src", "./icons/close.png");
        imgCheck.setAttribute("src", "./icons/check.png");
        p.textContent = task;

        imgCheck.addEventListener("click", () => checkTask(li));
        imgClose.addEventListener("click", () => closeTask(li));

        li.appendChild(imgClose);
        li.appendChild(p);
        li.appendChild(imgCheck);

        taskList.appendChild(li);

    };

    //Events
    buttonAddTask.onclick = () => {
        const newTask = inputFormTask.value.trim();
        if(newTask.length == 0) {
            Swal.fire("Ops...", "O nome da task não é válido", "warning");
            return;
        }
        generateTask(newTask);
        inputFormTask.value = "";
    };

    inputFormTask.addEventListener("keypress", (event) => {
        if(event.key === "Enter") {
            buttonAddTask.onclick()
        }
    })

})
