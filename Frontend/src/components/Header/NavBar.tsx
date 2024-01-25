import { Box, Center, HStack, IconButton, Image } from '@chakra-ui/react'
import logo from '../../assets/logo2.png'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
import { Menu, MenuButton, MenuList } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import UserInfo from '../SideBar/UserInfo'
import { useNavigate } from 'react-router-dom'
import Nav from '../Nav/Nav'

const NavBar = () => {
	const nav = useNavigate()

	return (
		<HStack pr={1}>
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
