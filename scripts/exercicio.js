// botão getElementById
const buttonEx1 = document.getElementById("exercicio1")
// addEventListener escuta
buttonEx1.addEventListener("click", () => {
    const num1Input = document.getElementById("num1")
    const num2Input = document.getElementById("num2")
    const resultado = document.getElementById("resultado")
    resultado.textContent = Number(num1Input.value) + Number(num2Input.value)
})