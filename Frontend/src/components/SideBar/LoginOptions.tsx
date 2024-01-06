import { Button, Stack, Text, keyframes } from '@chakra-ui/react'
import { ApiHander } from '../../fireBase/fireBase.config'
const pulse = keyframes`
  0% { background-color: #3b82f6; }
  50% { background-color: #2563eb; }
  100% { background-color: #3b82f6; }
`

const LoginOptions = () => {
	return (
		<div>
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
		</div>
	)
}

export default LoginOptions
