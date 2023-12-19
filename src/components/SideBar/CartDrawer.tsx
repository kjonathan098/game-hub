import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, Text, Heading, HStack, Image } from '@chakra-ui/react'
import { useRef } from 'react'
interface Props {
	isCartOpen: boolean
	onCartClose: () => void
}
const CartDrawer = ({ isCartOpen, onCartClose }: Props) => {
	const btnRef = useRef<HTMLButtonElement>(null)
	return (
		<>
			<Drawer isOpen={isCartOpen} placement="right" onClose={onCartClose} finalFocusRef={btnRef} size={'lg'}>
				<DrawerOverlay />
				<DrawerContent width={'50%'}>
					<DrawerCloseButton size={'xl'} />
					<DrawerHeader>Cart</DrawerHeader>

					<DrawerBody>
						{/* {loading ? (
							<>Loading</>
						) : (
							<>
								{!wishList.length && <Text>Nothing to see here wtf</Text>}
								{wishList.length && (
									<>
										{wishList.map((item, index) => {
											return (
												<HStack spacing={2} mb={2} key={index}>
													<Image src={item.background_image} width={'50%'} />
													<Text>{item.name} hello</Text>
												</HStack>
											)
										})}
									</>
								)}
							</>
						)} */}
					</DrawerBody>

					<DrawerFooter>
						{/* <Button variant="outline" mr={3} onClick={onCartClose}>
							Cancel
						</Button>
						<Button colorScheme="blue">Save</Button> */}
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default CartDrawer
