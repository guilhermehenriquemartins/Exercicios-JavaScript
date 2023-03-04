function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'Informe a sua idade!'
  } else if (idade >= 60) {
    return true
  } else {
    return false
  }
}

console.log(terceiraIdade(60))
