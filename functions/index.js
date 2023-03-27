import functions from "firebase-functions"
import express from 'express'
import cors from 'cors'
import { addFormation, addPlayer, getFormation, updatePlayer, getFormationByDoc } from './src/functions.js'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send('Api working'))

app.get('/formations', getFormation)
app.post('/formation', addFormation)

app.post('/players/:formation', addPlayer)
app.patch('/players/:formation/:_id', updatePlayer)

app.get('/formation/:formation', getFormationByDoc)

export const api = functions.https.onRequest(app)