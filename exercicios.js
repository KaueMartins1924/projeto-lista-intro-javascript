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
  peso = prompt("Digite seu peso:")
  altura= prompt("digite sua altura:")
  console.log (peso/(altura*altura))
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
  // implemente sua lógica aqui

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let remover1 = array.shift() 
  let remover5 = array.pop()
  let adicionar5 = array.unshift(5)
  let adicionar1 = array.push(1)
  console.log(array)
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

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
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}