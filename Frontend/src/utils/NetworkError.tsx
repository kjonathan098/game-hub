import { Center, Text } from '@chakra-ui/react'
import { GiGameConsole } from 'react-icons/gi'

const NetworkError = () => {
	return (
		<Center h={'50%'} flexDirection={'column'}>
			<Text fontSize={'30px'} fontWeight={'extrabold'}>
				UH OH Something got disconnected!
			</Text>
			<GiGameConsole fontSize={'300px'} />
			<Text fontSize={'30px'} fontWeight={'extrabold'}>
				Please refresh the page
			</Text>
		</Center>
	)
}

export default NetworkError
