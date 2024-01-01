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

const line_items = [
	{
		price_data: {
			currency: 'usd',
			product_data: {
				name: 'Test Product',
			},
			unit_amount: 2000, // This represents $20.00
		},
		quantity: 1,
	},
]

app.post('/checkout', async (req: Request, res: Response) => {
	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			line_items: line_items,
			mode: 'payment',
			success_url: 'http://your-success-url.com',
			cancel_url: 'http://your-cancel-url.com',
		})

		res.json({ id: session.id })
	} catch (e: any) {
		res.status(400).json({ error: { message: e.message } })
	}
})
app.listen(4000, () => {
	console.log('listening on port 4000...')
})
