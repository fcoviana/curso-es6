class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class Matematica {
    static soma(a, b) {
        return a + b;
    }

    static multiplicacao(a, b) {
        return a * b;
    }
}


class TodoList extends List {

}



const MinhaLista = new TodoList();

document.getElementById('add-todo').onclick = function() {
    MinhaLista.add("2019-08-27");
};

console.log("Soma: " + Matematica.soma(10, 17));