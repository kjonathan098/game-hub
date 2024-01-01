import { Drawer, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, Stack, HStack, Text, Box, Image, VStack, Center, Divider, Tag } from '@chakra-ui/react'
import { useContext, useEffect, useRef, useState } from 'react'
import DrawerGeneric from '../../utils/DrawerGeneric'
import { authContext } from '../../context/authProvider'
import stripeLogo from '../../assets/stripe.svg'
import { Tooltip } from '@chakra-ui/react'
import useOpenStripe from '../../services/open-stripe'

interface Props {
	isOpen: boolean
	onClose: () => void
	openDrawer: string | null
}

const UserGameListDrawer = ({ isOpen, onClose, openDrawer }: Props) => {
	const { cartList } = useContext(authContext)
	const { loading: loadingStripe, handleStripe } = useOpenStripe()

	const [totalPrice, setTotalPrice] = useState(0)
	const btnRef = useRef<HTMLButtonElement>(null)

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
											<Button
												colorScheme="blue"
												isDisabled={!totalPrice}
												onClick={() => {
													handleStripe(cartList)
												}}
												isLoading={loadingStripe}
											>
												Proceed to Payment
											</Button>
										</>
									</HStack>
									<Divider />
									<Center width={'100%'}>
										<Image src={stripeLogo} width={'150px'} />
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
