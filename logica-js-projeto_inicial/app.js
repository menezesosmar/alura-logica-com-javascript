// alert('Boas vindas ao jogo do número secreto!');
// let numeroSecreto = 29;
// let chute = prompt('Escolha um número entre 1 e 30: ');

// if (chute == numeroSecreto){
//     console.log('Isso aí! Você descobriu o número secreto (29)');
// } 

/*
Exercícios de fixação
*/

// 1º) Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
let mensagemDeErro = 'Erro! Preencha todos os campos.'
alert(mensagemDeErro);

// 2º) Para o próximo código, use um novo prompt para perguntar o nome do usuário e armazená-lo em uma variável, pode chamá-la de nome ou adicionar o que desejar .
let nomeUsuario = prompt('Olá, qual é o seu nome?');

// 3º) Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
let idadeUsuario = prompt('Agora, quantos anos você tem?');

// 4º) Agora, para validar a idade que capturamos no desafio 09, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
if (idadeUsuario >= 18){
    alert('Parabéns, '+ nomeUsuario + '!'+ ' Você pode tirar habilitação!');
} else {
    alert('Que pena, ' + nomeUsuario +'. Terá de esperar mais um pouco para ser motorizado :(')
}