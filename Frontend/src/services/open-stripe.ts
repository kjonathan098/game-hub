import React, { useState } from 'react'
import { IGame } from '../interfaces/games.interface'
import createBodyForStripe from './stripe-body'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import useToastMessage from '../hooks/useToast'

const useOpenStripe = () => {
	const [loading, setLoading] = useState(false)
	const { errorToast } = useToastMessage()

	const handleStripe = async (cartList: IGame[]) => {
		if (!cartList.length) return
		setLoading(true)
		const stripeBody = createBodyForStripe(cartList)

		const url = import.meta.env.VITE_API_URL

		const res = await axios.post(url, stripeBody)
		const stripe = await loadStripe('pk_test_51OTPRyF7WQZ6UPH8WBvZ6HC6KAwtK7h9sxf42iXjtipmfEH5Zkq9Q6AVWXRPnasGMl5EzqwdJrYGUnSvHZz36NLF00FnK7QeWX')
		const { id } = res.data
		if (!stripe) return errorToast('Error loading Stripe')
		stripe
			.redirectToCheckout({ sessionId: id })
			.then(function (result) {
				if (result.error) {
					// If `redirectToCheckout` fails due to a browser or network
					// error, display the localized error message to your customer.
					errorToast(result.error.message!)
				}
			})
			.catch((e: any) => {
				errorToast(e.message!)
			}).finally
		setLoading(false)
	}
	return { loading, handleStripe }
}

export default useOpenStripe
