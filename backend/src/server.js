import 'dotenv/config';
import express from 'express'
import cors from 'cors'
import { pool } from './config/database.js'

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

app.get('/db-test', async (req, res) => {
    const result = await pool.query('SELECT NOW()')

    res.json({
        status: 'ok',
        message: 'Banco conectado com sucesso',
        databaseTime: result.rows[0].now
    })
})

app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:3004')
})