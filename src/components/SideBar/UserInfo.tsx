import { Box, Button, HStack, Image, Stack, Text, keyframes } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { authContext } from '../../context/authProvider'

const pulse = keyframes`
  0% { background-color: #3b82f6; }
  50% { background-color: #2563eb; }
  100% { background-color: #3b82f6; }
`

const UserInfo = () => {
	const { googleSignIn, user } = useContext(authContext)

	if (!user)
		return (
			<Stack>
				<Text fontSize={'xl'} fontWeight={'bold'}>
					Login
				</Text>
				<Button bg={'red.500'} _hover={{ bg: 'red.700' }} onClick={googleSignIn}>
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
				<Text>{user.displayName}</Text>
			</HStack>
		</Stack>
	)
}

export default UserInfo
