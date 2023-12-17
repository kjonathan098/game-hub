import { Button, HStack, Image, Stack, Text } from '@chakra-ui/react'
import { authContext } from '../../context/authProvider'
import { useContext } from 'react'
import { CiGift, CiUser } from 'react-icons/ci'
import { FiShoppingCart } from 'react-icons/fi'
import { ApiHander } from '../../fireBase/fireBase.config'

const UserOptions = () => {
	const { user } = useContext(authContext)

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
						console.log(user.wishList)
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
