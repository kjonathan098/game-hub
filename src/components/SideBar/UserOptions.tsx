import { Button, HStack, Image, Stack, Text } from '@chakra-ui/react'
import { authContext } from '../../context/authProvider'
import { useContext, useState } from 'react'
import { CiGift, CiUser } from 'react-icons/ci'
import { FiShoppingCart } from 'react-icons/fi'
import { ApiHander } from '../../fireBase/fireBase.config'
import { IGameDetails, IUser } from '../../interfaces/games.interface'
import apiClient from '../../services/api-client'
import fetchList from '../../services/fetch-game-list'

const UserOptions = () => {
	const { user } = useContext(authContext)
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
						fetchGameList()
					}}
					isLoading={loading}
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
