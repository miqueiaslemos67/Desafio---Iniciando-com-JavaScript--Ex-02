//Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let number = prompt("Digite um número: ");

if(number % 3 === 0) {
    alert("É um número ímpar")
} else {
    alert("Não é um número ímpar")
}
