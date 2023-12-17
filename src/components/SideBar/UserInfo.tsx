import { Button, HStack, Image, Stack, Text, keyframes } from '@chakra-ui/react'
import { useContext } from 'react'
import { authContext } from '../../context/authProvider'
import { CiGift, CiUser } from 'react-icons/ci'
import { FiShoppingCart } from 'react-icons/fi'
import { ApiHander } from '../../fireBase/fireBase.config'

const pulse = keyframes`
  0% { background-color: #3b82f6; }
  50% { background-color: #2563eb; }
  100% { background-color: #3b82f6; }
`

const UserInfo = () => {
	const { user } = useContext(authContext)

	if (!user)
		return (
			<Stack>
				<Text fontSize={'xl'} fontWeight={'bold'}>
					Login
				</Text>
				<Button bg={'red.500'} _hover={{ bg: 'red.700' }} onClick={() => ApiHander.googleAuth()}>
					Google
				</Button>
				<Button>Google</Button>
				<Button bg={'blue.100'} animation={`${pulse} 2s infinite`}>
					Demo Account
				</Button>
			</Stack>
		)

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
				<Button width={'100%'} colorScheme="whatsapp">
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

export default UserInfo
