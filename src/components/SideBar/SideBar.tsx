import { Box, Stack } from '@chakra-ui/react'
import GenreList from './GenreList'
import UserInfo from './UserInfo'

const SideBar = () => {
	return (
		<Stack height={'100%'} p={2} spacing={10}>
			<UserInfo />
			<GenreList />
		</Stack>
	)
}

export default SideBar
