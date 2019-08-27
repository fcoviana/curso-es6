class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo() {
        this.todos.push('Novo Todo');
        alert(this.todos);
    }
}

const MinhaLista = new TodoList();

document.getElementById('add-todo').onclick = function() {
    MinhaLista.addTodo();
};