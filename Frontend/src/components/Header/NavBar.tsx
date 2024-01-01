import { Box, HStack, IconButton, Image } from '@chakra-ui/react'
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
interface Props {}

const NavBar = () => {
	return (
		<HStack padding={'10px'}>
			<Image src={logo} boxSize={'60px'} />
			<Box display={{ base: 'block', lg: 'none' }}>
				<Menu>
					<MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="outline" />
					<MenuList p={2}>
						<UserInfo />
					</MenuList>
				</Menu>
			</Box>
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	)
}

export default NavBar
