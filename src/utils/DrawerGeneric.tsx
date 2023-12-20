import { DrawerBody, Text, HStack, Image, Stack, Tag } from '@chakra-ui/react'
import GamePlatforms from '../components/HomePage/GamePlatforms'
import WishListButton from './WishListButton'
import CartButton from './CartButton'
import { useContext, useEffect, useState } from 'react'
import { authContext } from '../context/authProvider'
interface Iparams {
	openDrawer: string | null
}

const DrawerGeneric = ({ openDrawer }: Iparams) => {
	const { wishList, cartList } = useContext(authContext)
	const [listType, setListType] = useState(wishList)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		console.log(wishList)

		if (openDrawer === 'cartList') {
			setListType(cartList)
		} else {
			setListType(wishList)
		}
		setLoading(false)
	}, [openDrawer, wishList, cartList])

	if (loading) return <>loading...</>
	return (
		<DrawerBody>
			<>
				{!listType.length && <Text>Nothing to see here wtf</Text>}
				{listType.length && (
					<>
						{listType.map((game, index) => {
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
	)
}

export default DrawerGeneric
