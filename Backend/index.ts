import { Request, Response } from 'express'
import express = require('express')
import cors = require('cors')
const errorMW = require('./middleWares/erroMiddleWare')
require('dotenv').config()
const stripe = require('stripe')(process.env.secret_key)
const app = express()
app.use(express.json())
app.use(cors())

app.get('/checkout-test', (req: Request, res: Response) => {
	res.send('Hello, world!')
})

app.post('/checkout', async (req: Request, res: Response, next) => {
	if (!req.body.length) return next({ message: 'no items where send', status: 400 })

	const BASE_URL = process.env.BASE_URL || 'http://localhost:5173/'

	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			line_items: req.body,
			mode: 'payment',
			success_url: BASE_URL,
			cancel_url: BASE_URL,
		})
		res.json({ id: session.id })
	} catch (e: any) {
		console.log(e)
		next(e)
	}
})

app.use(errorMW)

app.listen(4000, () => {
	console.log('listening on port 4000...')
})

/*

NOTE 

This is a simple server to handle api calls to Stripe Services

*/
