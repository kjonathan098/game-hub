import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button } from '@chakra-ui/react'
import { useRef } from 'react'
import { FiShoppingBag } from 'react-icons/fi'

const Cart = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const btnRef = useRef<HTMLButtonElement | null>(null)
	return (
		<>
			<Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
				<FiShoppingBag />
			</Button>
			<Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Check Out</DrawerHeader>

					<DrawerBody>Hello</DrawerBody>

					<DrawerFooter>
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

export default Cart
