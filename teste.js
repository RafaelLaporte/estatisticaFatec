/*
split(separador): divide a string de acordo com 'separador'

RegEx:
\s indica espaços em branco
*/
let test = 'abacate;cebola; laranja ; tomate'
let stringList = test.split(/\s*;\s*/);

console.log(stringList);