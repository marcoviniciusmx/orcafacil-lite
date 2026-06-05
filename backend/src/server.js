import dotenv from 'dotenv';
import express from 'express'
import cors from 'cors'

const PORT = process.env.PORT || 3004

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('API OrçaFácil Lite rodando')
})

app.get('/health', (req, res) => {
    res.send({
        'status': 'ok',
        'message': 'API OrçaFácil Lite funcionando'
    })
})

app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:3004')
})