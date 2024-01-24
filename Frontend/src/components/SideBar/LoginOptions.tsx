import { Button, Stack, Text, keyframes } from '@chakra-ui/react'
import { ApiHander } from '../../fireBase/fireBase.config'
import { useState } from 'react'

import useToastMessage from '../../hooks/useToast'
const pulse = keyframes`
  0% { background-color: #3b82f6; }
  50% { background-color: #2563eb; }
  100% { background-color: #3b82f6; }
`

const LoginOptions = () => {
	const [loading, setLoading] = useState(false)
	const { errorToast } = useToastMessage()

	const handleDemoSignIn = async () => {
		setLoading(true)
		const res = await ApiHander.demoSignIn()
		if (!res) errorToast('something went wrong')
		setLoading(false)
	}
	return (
		<div>
			<Stack>
				<Text fontSize={'xl'} fontWeight={'bold'}>
					Login
				</Text>
				<Button bg={'red.500'} _hover={{ bg: 'red.700' }} onClick={() => ApiHander.googleAuth()}>
					Google
				</Button>
				<Button bg={'facebook.400'}>Facebook</Button>
				<Button bg={'blue.100'} animation={`${pulse} 2s infinite`} onClick={() => handleDemoSignIn()} isLoading={loading}>
					Demo Account
				</Button>
			</Stack>
		</div>
	)
}

export default LoginOptions
