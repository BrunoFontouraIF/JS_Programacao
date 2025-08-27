var nome, idade

    nome = prompt("Informe seu nome: ")
    idade = parseInt(prompt("Informe sua idade: "))

    if (idade >= 18) {

        alert("Você pode (tentar) tirar a CNH, "+nome)

    }

    else {

        alert(nome+" não está apto para tirar a CNH.")

    }