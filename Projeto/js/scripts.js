// função que adiciona a tarefa
function addTask() {

    //titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value;

    if(taskTitle) {
        // clona template li no html
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        // adiciona titulo ta tarefa, mudando o valor de span
        newTask.querySelector(".task-title").textContent = taskTitle

        // remover classes desnecessárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        // adiciona tarefa na lista ul
        const list = document.querySelector("#task-list");

        list.appendChild(newTask);
        
        // adicinar evento do botão de remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this);
        });

        // adicionar evento de completar a tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this);
        });

        //limpar texto
        document.querySelector("#task-title").value = "";

    }

}

// função de remover tarefa
function removeTask(task){
    task.parentNode.remove(true);
}

//função de completar a tarefa
function completeTask(task) {
    const taskToComplete = task.parentNode;

    taskToComplete.classList.toggle("done");

}


// evento de adicionar ação do botão add
const addBtn = document.querySelector("#add-btn"); 
 addBtn.addEventListener("click", function(e) {
    e.preventDefault();

    addTask();

 });