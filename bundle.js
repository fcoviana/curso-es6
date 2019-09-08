"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List =
/*#__PURE__*/
function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var Matematica =
/*#__PURE__*/
function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }, {
    key: "multiplicacao",
    value: function multiplicacao(a, b) {
      return a * b;
    }
  }]);

  return Matematica;
}();

var TodoList =
/*#__PURE__*/
function (_List) {
  _inherits(TodoList, _List);

  function TodoList() {
    _classCallCheck(this, TodoList);

    return _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this));
  }

  return TodoList;
}(List);

var MinhaLista = new TodoList();

document.getElementById('add-todo').onclick = function () {
  MinhaLista.add("2019-08-27");
};

console.log("Soma: " + Matematica.soma(10, 17)); //uso de const

var usuario = {
  nome: 'Francisco'
};
usuario.nome = 'Diego CTI';
console.log(usuario); //usando LET

function teste(x) {
  var y = 10;

  if (x > y) {
    var _y = 2;
    console.log(x, _y);
  }
}

teste(30); //usando vetor

var arr = [1, 2, 4, 6, 8, 9];
var newArr = arr.map(function (item, index) {
  return item * index;
});
console.log(newArr);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter);
var find = arr.find(function (item) {
  return item === 9;
});
console.log(find); //arrow function

var testeA = function testeA() {
  return {
    nome: 'Pedro Barbosa'
  };
};

console.log(testeA);

var somaA = function somaA() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 23;
  return a + b;
};

console.log(somaA(1, 1));
console.log(somaA(1));
console.log(somaA()); //desestruturacao

var aluno = {
  nome: 'Pedro Rosa',
  matricula: 2018010076,
  endereco: {
    cidade: 'Quixadá',
    estado: 'CE'
  }
};

function mostraNome(_ref) {
  var nome = _ref.nome;
  console.log(nome);
}

mostraNome(usuario);
