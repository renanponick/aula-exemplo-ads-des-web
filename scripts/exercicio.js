// botão getElementById
const buttonEx1 = document.getElementById("exercicio1")
// addEventListener escuta
buttonEx1.addEventListener("click", () => {
    const num1 = Number(prompt("informe um número"))
    const num2 = Number(prompt("informe outro número"))
    // const soma = num1 + num2
    // alert(soma)
    alert(num1 + num2)
})