// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var IdadeGuilherme = 23
var idadeJoao = 33
if (IdadeGuilherme > idadeJoao) {
  console.log(`Eu, Guilherme sou mais velho do que João`)
} else if (IdadeGuilherme == idadeJoao) {
  console.log('Nós, Guilherme e João temos a mesma idade.')
} else {
  console.log('Eu, Guilherme sou mais novo do que João')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)
// Resposta: 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //truthy
console.log(nome)
var idade = 28; //truthy
console.log(idade)
var possuiDoutorado = false; //false
console.log(possuiDoutorado)
var empregoFuturo; //false
console.log(empregoFuturo)
var dinheiroNaConta = 0; //false
console.log(dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  var diferenca = brasil - china
  console.log(`Brasil tem mais habitantes do que China, diferença é de ${diferenca} milhões de habitantes`)
} else {
  var diferenca = china - brasil
  console.log(`China tem mais habitantes do que Brasil, diferença é de ${diferenca} milhões de habitantes`)
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
//Falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
//Cão