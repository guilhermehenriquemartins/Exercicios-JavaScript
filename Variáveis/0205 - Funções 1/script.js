//Exercício 1
//Digite dois valores que serão passados em uma função, que vai retornar o resultado da soma deles

function soma(num1, num2) {
  return num1 + num2
}

console.log(soma(8,8))

//Exercício 2
//Digite dois valores que serão passados em uma função, que vai retornar a diferença da subtração deles

function subtracao(n1, n2) {
  if (n1 > n2) {
    return n1 - n2
  } else if (n1 < n2) {
    return n2 - n1
  }
}

console.log(subtracao(8,2))

//Exercício 3
//Digite dois valores que serão passados em uma função, que vai retornar o resto da divisão deles


function resto(N1, N2) {
  if (N1 > N2) {
    return N1 % N2
  } else if (N1 < N2) {
    return N2 % N1
  }
}

console.log(resto(10,3))

//Exercício 4
//Digite dois valores que serão passados em uma função, que vai retornar o produto da multiplicação deles

function multiplicacao(x, y) {
  return x * y
}

console.log(multiplicacao(6,8))

//Exercício 5
//Digite um valor que fará a soma com o valor de pi = 3.14 retornado de uma função

function pi() {
  return 3.14
}

console.log(5 + pi())

//Exercício 6 
//Digite um valor que fará a multiplicação com o valor de pi = 3.14 retornado de uma função

function phi() {
  return 3.14
}

console.log(2*phi())

//Exercício 7
//Faça uma função que vai receber o seu peso e altura e vai retornar o seu IMC

function imc(peso, altura) {
  var media = peso / (altura ** 2)
  if (media < 18.5) {
    return `Você tem ${media}, cuidado! Pois está abaixo do seu peso`
  } else if (media >= 18.5 && media <= 24.9) {
    return `Parabéns! Com ${media} você está dentro do seu peso ideal`
  } else if (media >= 25 && media <= 29.9) {
    return `Cuidado! Com ${media} você está acima do seu peso ideal`
  } else if (media >= 30 && media < 35) {
    return `Com ${media} você já é um obeso, melhor ir na academia`
  } else if (media > 35) {
    return `Você pode abreviar seus dias de vida se continuar à ter ${media} de índice de massa corporal!`
  }
}

console.log(imc(57, 1.67))

//Exercício 8
//Faça uma função que vai mostrar se você está apto a tirar carteira de motorista

function idade(x) {
  var cont = 0
  if (x >= 16 && x < 18) {
    return 'Você pode fazer emancipação, para isso consulte seus pais'
  } else if (x >= 18) {
    return 'Você pode tirar carteira de habilitação'
  } else if (x < 16) {
    while (x < 18) {
      cont++
      x++
    }
    return `Que pena! Você ainda não tem idade suficiente para tirar sua habilitação, espere mais ${cont} ano(s) para tirar a sua!`
  }
}

console.log(idade(15))
