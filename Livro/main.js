import {Livro} from './main.class.js';

const livro1 = new Livro('Aventuras de Alice no País das Maravilhas', 'Lewis Carroll', 144);
console.log(livro1.titulo === 'Aventuras de Alice no País das Maravilhas'); // true
console.log(livro1.autor === 'Lewis Carroll');// true
// livro1.autor = 'Marcio Torres'; // não é possivel
console.log(livro1.numeroDePaginas === 144);  // true
console.log(livro1.paginaAtual);  // 0

console.log(livro1.diasLidos === 0); // true

livro1.lidoHoje(10);
console.log(livro1.paginaAtual === 10); // true

console.log(livro1.terminado); // false

console.log(livro1.paraLer); // 134

livro1.lidoHoje(150);
console.log(livro1.paginaAtual); // 144
console.log(livro1.paraLer === 0); // true

console.log(livro1.diasLidos === 2); // true


const livro2 = new Livro('Viagem ao Centro da Terra', 'Júlio Verne', 224);

console.log(livro2.titulo === 'Viagem ao Centro da Terra'); // true
console.log(livro2.autor === 'Júlio Verne'); // true
console.log(livro2.numeroDePaginas === 224); // true
console.log(livro2.paginaAtual === 0); // true
// livro2.paginaAtual = 224; // não é possivel

console.log(livro1.mesmoAutor(livro2)); // true

const livro3 = new Livro('A Volta ao Mundo em 80 Dias', 'Júlio Verne', 264);
console.log(livro3.titulo === 'A Volta ao Mundo em 80 Dias'); // true
console.log(livro3.autor === 'Júlio Verne'); // true
console.log(livro3.numeroDePaginas === 264); // true

console.log(livro2.mesmoAutor(livro3)); // true

livro3.lidoHoje(122);
console.log(livro3.paginaAtual === 122); // true
console.log(livro3.paraLer); // 142

livro3.lidoHoje(70);
console.log(livro3.mesmoDiasLidos(livro1)); // true

livro3.lidoHoje(50);

console.log(livro3.terminado); // false
console.log(livro3.paraLer); // 22

livro3.lidoHoje(25);
console.log(livro3.terminado); // true

console.log(livro3.mesmoDiasLidos(livro1)); // false

