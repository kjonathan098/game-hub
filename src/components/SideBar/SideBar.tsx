import { Box, Stack } from '@chakra-ui/react'
import GenreList from './GenreList'
import UserInfo from './UserInfo'
import PlatformList from './PlatformList'

const SideBar = () => {
	return (
		<Stack p={2} spacing={10} justifyContent={'space-around'}>
			<UserInfo />
			<GenreList />
			<PlatformList />
		</Stack>
	)
}

export default SideBar
