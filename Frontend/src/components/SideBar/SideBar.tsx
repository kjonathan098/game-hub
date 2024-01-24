import { Button, Stack } from '@chakra-ui/react'
import GenreList from './GenreList'
import UserInfo from './UserInfo'
import PlatformList from './PlatformList'
import { useNavigate } from 'react-router-dom'
import { FaGamepad } from 'react-icons/fa'
import { RiGameFill } from 'react-icons/ri'

const SideBar = () => {
	const nav = useNavigate()

	const handleReDirect = () => {
		nav('/games')
	}
	return (
		<Stack p={2} spacing={10} h={{ base: '100%' }}>
			<Stack>
				<Button
					onClick={() => {
						nav('/')
					}}
					rightIcon={<FaGamepad />}
				>
					Home
				</Button>
				<Button onClick={handleReDirect} rightIcon={<RiGameFill />}>
					Browse All Games
				</Button>
			</Stack>
			<UserInfo />
			<GenreList />
			<PlatformList />
		</Stack>
	)
}

export default SideBar
