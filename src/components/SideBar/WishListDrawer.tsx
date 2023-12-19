import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, Text, HStack, Image, Stack, Tag } from '@chakra-ui/react'
import { useContext, useRef } from 'react'
import { authContext } from '../../context/authProvider'
import GamePlatforms from '../HomePage/GamePlatforms'
import WishListButton from '../../utils/WishListButton'
import CartButton from '../../utils/CartButton'

interface Props {
	isWishListOpen: boolean
	onWishListClose: () => void
}

const WishListDrawer = ({ isWishListOpen, onWishListClose }: Props) => {
	const { user, wishList } = useContext(authContext)

	const btnRef = useRef<HTMLButtonElement>(null)

	return (
		<>
			<Drawer isOpen={isWishListOpen} placement="right" onClose={onWishListClose} finalFocusRef={btnRef} size={'md'}>
				<DrawerOverlay />
				<DrawerContent width={'50%'}>
					<DrawerCloseButton size={'xl'} />
					<DrawerHeader>Wish List</DrawerHeader>

					<DrawerBody>
						<>
							{!wishList.length && <Text>Nothing to see here wtf</Text>}
							{wishList.length && (
								<>
									{wishList.map((game, index) => {
										return (
											<Stack direction="row" spacing={2} mb={2} key={index} bg={'blackAlpha.700'} borderRadius={'lg'} shadow={'base'} alignItems={'stretch'}>
												<Image src={game.background_image} width={'154px'} height={'159px'} objectFit={'cover'} />

												<Stack>
													<a>
														<Text fontWeight={'bold'} fontSize={'lg'} mt={'10px'}>
															{game.name}
														</Text>
													</a>
													<Tag w={'100px'} justifyContent={'center'}>
														$ 14.99
													</Tag>
													<GamePlatforms platforms={game.parent_platforms.map((p) => p.platform)} />
													<HStack>
														<WishListButton game={game} />
														<CartButton game={game} />
													</HStack>
												</Stack>
											</Stack>
										)
									})}
								</>
							)}
						</>
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
