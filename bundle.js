"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

mostraNome(usuario); //REST

var cliente = {
  nome: 'Talis Silva Babu',
  idade: 30,
  cidade: 'São João dos Queiroz'
};

var nome = cliente.nome,
    resto = _objectWithoutProperties(cliente, ["nome"]);

console.log(nome);
console.log(resto);
var arr1 = [10, 20, 30, 50];
var a = arr1[0],
    b = arr1[1],
    c = arr1.slice(2);
console.log(a);
console.log(b);
console.log(c);

function soma1(a) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }

  return params;
}

console.log(soma1(10, 20, 20)); //SPREAD

var arrA1 = [10, 20, 30, 40];
var arrA2 = [50, 60, 70, 80, 90, 100];
var arrA3 = [].concat(arrA1, arrA2);
console.log(arrA3);
var clienteA1 = {
  nome: 'Talis Silva Babu',
  idade: 30,
  cidade: 'São João dos Queiroz'
};

var clienteA2 = _objectSpread({}, clienteA1, {
  nome: 'Jose da Lúcia'
});

console.log(clienteA2); //Template Literals

var nomeB1 = "Francisco Viana";
var idadeB1 = 19; //console.log("Meu nome é "+ nomeB1 + " e tenho " + idadeB1 + "anos");

console.log("Meu nome \xE9 ".concat(nomeB1, " e tenho ").concat(idadeB1, " anos")); //Object Short Syntax

var clienteB1 = {
  nomeB1: nomeB1,
  idadeB1: idadeB1,
  enderecoB1: "São Jose"
};
console.log(clienteB1);
