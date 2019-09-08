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
    constructor(){
        super();
    }

}

const MinhaLista = new TodoList();

document.getElementById('add-todo').onclick = function() {
    MinhaLista.add("2019-08-27");
};

console.log("Soma: " + Matematica.soma(10, 17));

//uso de const
const usuario = { nome: 'Francisco'};
usuario.nome = 'Diego CTI';
console.log(usuario);

//usando LET
function teste(x){
    let y = 10;
    if(x > y){
        let y = 2;
        console.log(x,y);
    }
}

teste(30);

//usando vetor
const arr = [1,2,4,6,8,9];

const newArr = arr.map(function(item, index){
    return item * index;
});

console.log(newArr);

const sum = arr.reduce((total, next) =>{
    return total + next;
});

console.log(sum);

const filter = arr.filter(item => item % 2 === 0);

console.log(filter);

const find = arr.find(function(item){
    return item === 9;
});

console.log(find);

//arrow function

const testeA = () => ({ nome: 'Pedro Barbosa'});
console.log(testeA);

const somaA = (a = 10, b = 23) => a + b;
console.log(somaA(1,1));
console.log(somaA(1));
console.log(somaA());

//desestruturacao
const aluno = {
    nome: 'Pedro Rosa',
    matricula : 2018010076,
    endereco: {
        cidade: 'Quixadá',
        estado: 'CE'
    }
};

function mostraNome({ nome }){
    console.log(nome);
}
mostraNome(usuario);

