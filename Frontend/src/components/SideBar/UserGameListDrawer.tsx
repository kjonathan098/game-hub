import { Drawer, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, Stack, HStack, Text, Box, Image, VStack, Center, Divider, Tag } from '@chakra-ui/react'
import { useContext, useEffect, useRef, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import DrawerGeneric from '../../utils/DrawerGeneric'
import { authContext } from '../../context/authProvider'
import axios from 'axios'
import useToastMessage from '../../hooks/useToast'
import createBodyForStripe from '../../services/stripe-body'
import stripe from '../../assets/stripe.svg'
import { Tooltip } from '@chakra-ui/react'

interface Props {
	isOpen: boolean
	onClose: () => void
	openDrawer: string | null
}

const UserGameListDrawer = ({ isOpen, onClose, openDrawer }: Props) => {
	const { cartList } = useContext(authContext)
	const { errorToast } = useToastMessage()
	const [loading, setLoading] = useState(false)

	const [totalPrice, setTotalPrice] = useState(0)
	const btnRef = useRef<HTMLButtonElement>(null)

	const line_items = [
		{
			price_data: {
				currency: 'usd',
				product_data: {
					name: 'Test Product',
					images: ['https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg'], // Add this line
				},
				unit_amount: 3000, // This represents $20.00
			},
			quantity: 1,
		},
	]

	const handleStripe = async () => {
		if (!cartList.length) return
		setLoading(true)
		const stripeBody = createBodyForStripe(cartList)

		const res = await axios.post('http://localhost:4000/checkout', stripeBody)
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

	useEffect(() => {
		if (openDrawer === 'cartList') {
			let total = 0
			cartList.forEach((game) => {
				total += game.price!
			})

			setTotalPrice(total)
		}
	}, [cartList, openDrawer])

	return (
		<>
			<Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef} size={'md'}>
				<DrawerOverlay />
				<DrawerContent width={'50%'}>
					<DrawerCloseButton size={'xl'} />
					<DrawerHeader>{openDrawer?.toUpperCase()}</DrawerHeader>
					<DrawerGeneric openDrawer={openDrawer} />
					<DrawerFooter>
						{openDrawer === 'cartList' && (
							<Tooltip label="This is Stripe Test Mode. You can enter CC number : 4242-4242-4242-4242 and fill out the rest of the form with fake info to make a 'purchase' ">
								<VStack width={'100%'}>
									<HStack direction={'row'} display={'flex'} justifyContent={'space-between'} width={'100%'}>
										<>
											<Text fontWeight={'bold'} fontSize={'3xl'}>
												Total : ${totalPrice}
											</Text>
											<Button colorScheme="blue" isDisabled={!totalPrice} onClick={handleStripe} isLoading={loading}>
												Proceed to Payment
											</Button>
										</>
									</HStack>
									<Divider />
									<Center width={'100%'}>
										<Image src={stripe} width={'150px'} />
									</Center>
								</VStack>
							</Tooltip>
						)}
						{openDrawer !== 'cartList' && (
							<Button variant="outline" mr={3} onClick={onClose}>
								Close
							</Button>
						)}
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default UserGameListDrawer
