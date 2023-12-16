import { Box, Button, Stack, Text, keyframes } from '@chakra-ui/react'
import { useState } from 'react'

const pulse = keyframes`
  0% { background-color: #3b82f6; }
  50% { background-color: #2563eb; }
  100% { background-color: #3b82f6; }
`

const UserInfo = () => {
	const [loading, setLoading] = useState(false)
	return (
		<Stack>
			<Text fontSize={'xl'} fontWeight={'bold'}>
				Login
			</Text>
			<Button bg={'red.500'} _hover={{ bg: 'red.700' }}>
				Google
			</Button>
			<Button>Google</Button>
			<Button bg={'blue.100'} animation={`${pulse} 2s infinite`}>
				Demo Account
			</Button>
		</Stack>
	)
}

export default UserInfo
