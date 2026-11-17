import express from 'express'
import db from './repository/index.js'

const app = express()
app.use(express.json())

// C
app.post("/api/v1/pessoa", (req, res) => {
    const { id, cpf, email } = req.body

    if (!id || !cpf || !email) {
        res.send({ message: " avisar que é pra enviar tudo" })
        return
    }

    db.push({ id, cpf, email })
    res.send({ message: "Pessoa criada com sucesso" })
})
// R
app.get("/api/v1/pessoa/:id", (req, res) => {})
// U
app.put("/api/v1/pessoa/:id", (req, res) => {})
// D
app.delete("/api/v1/pessoa/:id", (req, res) => {})

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})
