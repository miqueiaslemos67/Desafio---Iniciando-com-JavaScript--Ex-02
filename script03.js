//Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

alert("Iremos consultar o valor digitado")
let value = prompt("Digite um valor:");
let number = Number(value)
if(typeof number === 'number' && !isNaN(number)) {
    alert("Valor númerico!")
} else {
    alert("Não é um número!")
}
