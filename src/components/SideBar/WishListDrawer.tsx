import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, Text, Heading, HStack, Image } from '@chakra-ui/react'
import { useContext, useEffect, useRef, useState } from 'react'
import { authContext } from '../../context/authProvider'
import fetchList from '../../services/fetch-game-list'
import { IGameDetails } from '../../interfaces/games.interface'

interface Props {
	isWishListOpen: boolean
	onWishListClose: () => void
}

const WishListDrawer = ({ isWishListOpen, onWishListClose }: Props) => {
	const { user, wishList } = useContext(authContext)

	const btnRef = useRef<HTMLButtonElement>(null)

	const [loading, setLoading] = useState(false)

	const fetchGameList = async () => {
		// if (!user) return
		// setLoading(true)
		// const res = await fetchList(user)
		// if (!res) {
		// 	setLoading(false)
		// 	return console.log('eroror')
		// }
		// setWishList(res)
		// setLoading(false)
	}

	useEffect(() => {
		fetchGameList()
	}, [])

	useEffect(() => {
		if (!user) return
		// setWishList([...(user.wishList || [])])
	}, [user])

	return (
		<>
			<Drawer isOpen={isWishListOpen} placement="right" onClose={onWishListClose} finalFocusRef={btnRef} size={'lg'}>
				<DrawerOverlay />
				<DrawerContent width={'50%'}>
					<DrawerCloseButton size={'xl'} />
					<DrawerHeader>Wish List</DrawerHeader>

					<DrawerBody>
						{loading ? (
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
						)}
					</DrawerBody>

					<DrawerFooter>
						<Button variant="outline" mr={3} onClick={onWishListClose}>
							Cancel
						</Button>
						<Button colorScheme="blue">Save</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default WishListDrawer
