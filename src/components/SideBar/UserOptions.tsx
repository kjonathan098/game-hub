import { Button, HStack, Image, Stack, Text } from '@chakra-ui/react'
import { authContext } from '../../context/authProvider'
import { useContext, useState } from 'react'
import { CiGift, CiUser } from 'react-icons/ci'
import { FiShoppingCart } from 'react-icons/fi'
import { ApiHander } from '../../fireBase/fireBase.config'
import { IGameDetails, IUser } from '../../interfaces/games.interface'
import apiClient from '../../services/api-client'

const UserOptions = () => {
	const { user } = useContext(authContext)
	const [wishList, setWishList] = useState<IGameDetails[]>([])

	const fetchGameDetails = (id: string): Promise<IGameDetails> => {
		return apiClient
			.get<IGameDetails>(`/games/${id}`)
			.then((res) => res.data)
			.catch((err) => {
				// Handle error, possibly return a default value or error indicator
				console.error(err)
				throw err
			})
	}

	// Function to fetch wishlist games
	async function fetchWishList() {
		if (!user?.wishList) return

		try {
			const promises = user.wishList.map((gameId) => fetchGameDetails(gameId))
			const gamesDetails = await Promise.all(promises)
			setWishList(gamesDetails)
		} catch (error) {
			// Handle error for the whole wishlist fetching
			console.error(error)
			// You might want to return an error indicator or throw the error
		}
	}

	if (!user) return
	return (
		<Stack>
			<Text fontSize={'xl'} fontWeight={'bold'}>
				Welcome Back!
			</Text>
			<HStack>
				<Image src={user.photoURL} alt={'profile pic'} rounded={'full'} width={'25px'} height={'25px'} />
				<Text width={'100%'} textAlign={'center'}>
					{user.displayName}
				</Text>
			</HStack>
			<HStack>
				<CiGift style={{ fontSize: '25px' }} />
				<Button
					width={'100%'}
					colorScheme="whatsapp"
					onClick={() => {
						fetchWishList()
					}}
				>
					Wish List
				</Button>
			</HStack>
			<HStack>
				<FiShoppingCart style={{ fontSize: '25px' }} />
				<Button width={'100%'} colorScheme="teal">
					Cart
				</Button>
			</HStack>
			<HStack>
				<CiUser style={{ fontSize: '25px' }} />
				<Button width={'100%'} colorScheme="cyan" onClick={() => ApiHander.signOut()}>
					Logout
				</Button>
			</HStack>
		</Stack>
	)
}

export default UserOptions
