function AddItem(){

    var name=document.querySelector('#name').value.trim();
    var content=document.querySelector('#content').value.trim();

    if(name==="" || content===""){
        alert("Please fill out both fields");
        return;
    }

    const taskContainer = document.createElement('div');
    taskContainer.className = 'd-flex align-items-center';
    taskContainer.style.backgroundColor="white";

    const para = document.createElement('p');
    const node = document.createTextNode(`${name}: ${content}`);
    para.appendChild(node);

    const removeBtn=document.createElement('button');
    removeBtn.innerHTML='🗑️';
    removeBtn.addEventListener("click",function(){
        taskContainer.remove();
    });
    removeBtn.style.padding='0';
    removeBtn.style.border='none';
    removeBtn.style.background='none';

    taskContainer.appendChild(para);
    taskContainer.appendChild(removeBtn);

    const todo = document.querySelector('#todo');
    todo.prepend(taskContainer);

    document.querySelector("#name").value = '';
    document.querySelector("#content").value = '';
}

document.addEventListener("DOMContentLoaded", function() {
    var add=document.querySelector("#add");
    add.addEventListener("click",AddItem);
});