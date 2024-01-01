import { Request, Response } from 'express'

import express = require('express')
import cors = require('cors')
require('dotenv').config()
const stripe = require('stripe')(process.env.secret_key)
const app = express()
app.use(express.json())
app.use(cors())

app.get('/checkout-test', (req: Request, res: Response) => {
	res.send('Hello, world!')
})

app.post('/checkout', async (req: Request, res: Response) => {
	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			line_items: req.body,
			mode: 'payment',
			success_url: 'http://localhost:5173/',
			cancel_url: 'http://localhost:5173/',
		})

		res.json({ id: session.id })
	} catch (e: any) {
		console.log(e)
		res.status(400).json({ error: { message: e.message } })
	}
})
app.listen(4000, () => {
	console.log('listening on port 4000...')
})
