// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  altura = prompt("Digite a altura:")
  largura = prompt("Digite a largura:")
  console.log ((altura*largura))
}

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
  anoAtual = prompt ("Digite o ano atual:")
  anoNascimento =  prompt ("Digite o ano do seu nascimento:")
  console.log ((anoAtual-anoNascimento))
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const resultado = (peso/(altura*altura))
  return resultado
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  nome = prompt("Digite seu nome:")
  idade = prompt("Digite sua idade:")
  email = prompt("Digite seu email:")
  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cores = ["", "", ""]
  cores[0] = prompt("Digite a cor 1:")
  cores[1] = prompt("Digite a cor 2:")
  cores[2] = prompt("Digite a cor 3:")
  console.log(cores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  let maiusculo = string.toUpperCase()
  console.log(maiusculo)
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const ingressosNecessarios = custo/valorIngresso
  console.log (ingressosNecessarios)
  return ingressosNecessarios
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
 return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let stringComeco = array[array.length -1]
  let stringfim = array[0]
  array.pop()
  array.shift()
  array.unshift(stringComeco)
  array.push(stringfim)
  console.log (array)
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  string1 = string1.toUpperCase()
  string2 = string2.toUpperCase()
  return string1===string2

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtual = prompt('Qual o ano atual?')
  const anoNascimento = prompt('Qual o seu ano de nascimento?')
  const emissaoRg = prompt('Em que ano foi emitido seu RG?')
  let idade = (anoAtual-anoNascimento)
  let idadeRg = (anoAtual-emissaoRg)
  let verificar1 = (idade<=20&&idadeRg>=5)
  let verificar2 = (idade>20&&idade<=50&&idadeRg>=10)
  let verificar3 =(idade>50&&idadeRg>15)
  let resultado = verificar1 || verificar2 || verificar3
  console.log (resultado)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  return ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu(idade, ensino, horario) {
  idade = confirm ("Você tem mais de 18 anos?")
  ensino = confirm ("Você possui ensino médio completo?")
  horario = confirm ("Você possui disponibilidade exclusiva durante os horários do curso?")
  const aprovado = idade && ensino && horario
  console.log (aprovado)
}