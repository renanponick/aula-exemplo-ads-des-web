// ctrl + ;
// console.log("batata") - um aparece só no console
// alert("frita") - aparece na tela para o usuario
// prompt("123") = aparece na tela e pede algo pro usuario

const footer = document.getElementById("rodape")
footer.style.backgroundColor = "blue"

const h2Criado = document.createElement("h2")
h2Criado.textContent = "Criando um H2 no footer"
footer.appendChild(h2Criado)

h2Criado.addEventListener("click", () => {
    alert("funcionou")
})

const forms = document.getElementById("formulario")
forms.addEventListener("submit", (event) => {
    event.preventDefault()
    alert("nao enviou nada")
})

footer.addEventListener("mouseover", () => {
    alert("oi 123456")
})
const sim = true

if(!sim) {

}