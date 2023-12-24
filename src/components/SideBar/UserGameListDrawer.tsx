import { Drawer, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button } from '@chakra-ui/react'
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
		console.log(openDrawer)

		if (openDrawer === 'cartList') {
			let total = 0
			cartList.forEach((game) => {
				total += game.price!
			})
			console.log(total)

			setTotalPrice(total)
		}
	}, [cartList, openDrawer])

	return (
		<>
			<Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef} size={'md'}>
				<DrawerOverlay />
				<DrawerContent width={'50%'}>
					<DrawerCloseButton size={'xl'} />
					<DrawerHeader>Wish List</DrawerHeader>
					<DrawerGeneric openDrawer={openDrawer} />
					<DrawerFooter>
						{openDrawer === 'cartList' && cartList.length && <>Total Price : {totalPrice}</>}

						<Button variant="outline" mr={3} onClick={onClose}>
							Cancel
						</Button>
						<Button colorScheme="blue">Save</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default UserGameListDrawer
