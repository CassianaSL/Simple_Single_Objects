import {Fraction} from './main.class.js';

// Fraction(numerator, denominator)
const fr = new Fraction(3, 4); // para representar "três quartos"
console.log(fr.numerator === 3);
console.log(fr.denominator === 4);
console.log(fr.toString()); // imprime, por exemplo: "3/4"
console.log(fr.toString() === '3/4');
// as seguintes linhas não devem funcionar
// fr.numerator = 10;
// fr.denominator = 10;
// -----------------------

const f1 = new Fraction(4, 15);
console.log(f1.toString() === '4/15');

const f2 = new Fraction(5, 15);
console.log(f2.toString() === '5/15');

const f3 = f1.plus(f2); // representaria uma situação de: f1 + f2
console.log(f3.toString()); // imprime "9/15"
console.log(f3.toString() === '9/15');

const f4 = new Fraction(1, 3);
console.log(f4.canReduce); // imprime false
console.log(f4.canReduce === false);

const f5 = new Fraction(9, 15);
console.log(f5.canReduce); // imprime true
console.log(f5.canReduce === true);

f5.reduce();
console.log(f5.toString() === '3/5');
console.log(f5.canReduce === false);

const f6 = new Fraction(25, 4);
const f7 = new Fraction(2, 5);

const f8 = f6.divide(f7);
console.log(f8); // imprime "125/8"

const f9 = new Fraction(3, 7);
const f10 = new Fraction(2, 3);

const f11 = f9.multiply(f10);
console.log(f11.toString()); // imprime "6/21"
console.log(f11.toString() === '6/21'); // imprime "6/21"

// TODO: escreva mais 1 casos de teste com multiply

const f12 = new Fraction(7, 8);
const f13 = new Fraction(2, 5);

console.log(f12.greaterThan(f13)); // imprime "true"
console.log(f12.greaterThan(f13) === true);
console.log(f12.lessThan(f13)); // imprime "false"
console.log(f12.lessThan(f13) === false);
console.log(f12.equals(f13)); // false
console.log(f12.equals(f13) === false);

const f14 = new Fraction(2, 3);
const f15 = new Fraction(12, 36);
const f16 = new Fraction(1, 3);

console.log(f14.greaterThan(f15) === true);
console.log(f14.greaterThan(f16) === true);
console.log(f15.greaterThan(f16) === false);

console.log(f15.lessThan(f16) === false);
console.log(f15.lessThan(f14) === true);
console.log(f14.lessThan(f16) === false);

console.log(f15.equals(f14) === false);
console.log(f15.equals(f16) === true);
console.log(f14.equals(f16) === false);

const f17 = new Fraction(4);
console.log(f17.numerator === 4);
console.log(f17.denominator === 1);
console.log(f17.toString() === '4/1');
f17.reduce(); // +1 caso com reduce
console.log(f17.toString() === '4/1');
console.log(f17.canReduce === false);

const f18 = new Fraction();
console.log(f18.numerator === 0);
console.log(f18.denominator === 1);
console.log(f18.toString() === '0/1');

const f19 = new Fraction(125, 8);
f19.reduce(); // +2 caso com reduce
console.log(f19.toString() === '125/8');

const f20 = f18.plus(f17); // +1 caso com plus
console.log(f20.toString() === '4/1');


const f21 = new Fraction(1, 6);
const f22 = new Fraction(6, 8);
f22.reduce(); // +3 caso com reduce
console.log(f22.toString() === '3/4');

const f23 = f21.plus(f22); // +2 caso com plus
console.log(f23.toString() === '11/12');

const f24 = f21.multiply(f22); // +1 caso com multiply
console.log(f24 === '3/24');

const f25 = f22.divide(f21); // +1 caso com divide
console.log(f25 === '18/4');

const f26 = new Fraction(2, 7);
const f27 = new Fraction(3, 8);

const f28 = f26.multiply(f27); // +2 casos com multiply
console.log(f28 === '6/56');

const f29 = f26.divide(f27); // +2 casos com divide
console.log(f29 === '16/21');

const f30 = f27.divide(f26); // +3 casos com divide
console.log(f30 === '21/16');

const f31 = f27.plus(f26); // +3 casos com plus
console.log(f31 === '37/56');

const f32 = f21.multiply(f27); // +3 casos com multiply
console.log(f32 === '3/48');
