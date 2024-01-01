import { Drawer, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, Stack, HStack, Text } from '@chakra-ui/react'
import { useContext, useEffect, useRef, useState } from 'react'

import DrawerGeneric from '../../utils/DrawerGeneric'
import { authContext } from '../../context/authProvider'

interface Props {
	isOpen: boolean
	onClose: () => void
	openDrawer: string | null
}

const UserGameListDrawer = ({ isOpen, onClose, openDrawer }: Props) => {
	const { cartList } = useContext(authContext)

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
						<HStack direction={'row'}>
							{openDrawer === 'cartList' && (
								<>
									<Text fontWeight={'bold'} fontSize={'3xl'}>
										Total : ${totalPrice}
									</Text>
									<Button colorScheme="blue" isDisabled={!totalPrice}>
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
