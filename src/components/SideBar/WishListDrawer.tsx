import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, Text, Heading, HStack, Image } from '@chakra-ui/react'
import { useContext, useEffect, useRef, useState } from 'react'
import { authContext } from '../../context/authProvider'
import fetchList from '../../services/fetch-game-list'
import { IGameDetails } from '../../interfaces/games.interface'

interface Props {
	isOpen: boolean
	onClose: () => void
}

const WishListDrawer = ({ isOpen, onClose }: Props) => {
	const { user } = useContext(authContext)

	const btnRef = useRef<HTMLButtonElement>(null)
	const [wishList, setWishList] = useState<IGameDetails[] | null>(null)
	const [loading, setLoading] = useState(false)

	const fetchGameList = async () => {
		if (!user) return
		setLoading(true)
		const res = await fetchList(user)

		if (!res) {
			setLoading(false)
			return console.log('eroror')
		}
		console.log(res)
		setWishList(res)
		setLoading(false)
	}

	useEffect(() => {
		fetchGameList()
	}, [])

	return (
		<>
			<Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef} size={'lg'}>
				<DrawerOverlay />
				<DrawerContent width={'50%'}>
					<DrawerCloseButton />
					<DrawerHeader>Wish List</DrawerHeader>

					<DrawerBody>
						{loading ? (
							<>Loading</>
						) : (
							<>
								{wishList?.map((item) => {
									return (
										<HStack>
											<Image src={item.background_image} width={'50%'} />
											<Text>{item.name}</Text>
										</HStack>
									)
								})}
							</>
						)}
					</DrawerBody>

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

export default WishListDrawer
