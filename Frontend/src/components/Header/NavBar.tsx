import { Box, Center, HStack, IconButton, Image } from '@chakra-ui/react'
import logo from '../../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
import { Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import UserOptions from '../SideBar/UserOptions'
import SideBar from '../SideBar/SideBar'
import LoginOptions from '../SideBar/LoginOptions'
import { useContext } from 'react'
import { authContext } from '../../context/authProvider'
import UserInfo from '../SideBar/UserInfo'
import { useNavigate } from 'react-router-dom'
import Nav from '../Nav/Nav'
interface Props {}

const NavBar = () => {
	const nav = useNavigate()

	return (
		<HStack padding={'10px'}>
			<Image
				src={logo}
				boxSize={'60px'}
				onClick={() => {
					nav(`/`)
				}}
				_hover={{ cursor: 'pointer' }}
			/>
			<SearchInput />
			<Box display={{ base: 'block', lg: 'none' }}>
				<Menu>
					{({ onClose }) => (
						<>
							<MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="outline" />
							<MenuList p={2} w={'100vw'} bg={'whiteAlpha.200'} _dark={{ bg: '#272727' }}>
								<Nav onClose={onClose} />
								<Center>
									<UserInfo />
								</Center>
							</MenuList>
						</>
					)}
				</Menu>
			</Box>
			<ColorModeSwitch />
		</HStack>
	)
}

export default NavBar
