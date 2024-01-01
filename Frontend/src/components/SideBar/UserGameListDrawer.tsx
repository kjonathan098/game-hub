import { Drawer, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, Stack, HStack, Text } from '@chakra-ui/react'
import { useContext, useEffect, useRef, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import DrawerGeneric from '../../utils/DrawerGeneric'
import { authContext } from '../../context/authProvider'
import axios from 'axios'
import useToastMessage from '../../hooks/useToast'

interface Props {
	isOpen: boolean
	onClose: () => void
	openDrawer: string | null
}

const UserGameListDrawer = ({ isOpen, onClose, openDrawer }: Props) => {
	const { cartList } = useContext(authContext)
	const { errorToast } = useToastMessage()

	const [totalPrice, setTotalPrice] = useState(0)
	const btnRef = useRef<HTMLButtonElement>(null)

	const handleStripe = async () => {
		const res = await axios.post('http://localhost:4000/checkout')
		const stripe = await loadStripe('pk_test_51OTPRyF7WQZ6UPH8WBvZ6HC6KAwtK7h9sxf42iXjtipmfEH5Zkq9Q6AVWXRPnasGMl5EzqwdJrYGUnSvHZz36NLF00FnK7QeWX')
		const { id } = res.data
		if (!stripe) return errorToast('Error loading Stripe')
		stripe.redirectToCheckout({ sessionId: id }).then(function (result) {
			if (result.error) {
				// If `redirectToCheckout` fails due to a browser or network
				// error, display the localized error message to your customer.
				alert(result.error.message)
			}
		})
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
						<HStack direction={'row'}>
							{openDrawer === 'cartList' && (
								<>
									<Text fontWeight={'bold'} fontSize={'3xl'}>
										Total : ${totalPrice}
									</Text>
									<Button colorScheme="blue" isDisabled={!totalPrice} onClick={handleStripe}>
										Proceed to Payment
									</Button>
								</>
							)}
							<Button variant="outline" mr={3} onClick={onClose}>
								Close
							</Button>
						</HStack>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default UserGameListDrawer
