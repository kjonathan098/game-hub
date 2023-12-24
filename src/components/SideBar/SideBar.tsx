import { Box, Stack } from '@chakra-ui/react'
import GenreList from './GenreList'
import UserInfo from './UserInfo'

const SideBar = () => {
	return (
		<Stack height={'100vh'} p={2} spacing={10} justifyContent={'space-around'}>
			<UserInfo />
			<GenreList />
		</Stack>
	)
}

export default SideBar
