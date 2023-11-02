import { HStack, Image, Input, InputLeftElement, InputGroup } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
	return (
		<HStack justifyContent={'space-between'} padding={'10px'}>
			<Image src={logo} boxSize={'60px'} />
			<InputGroup>
				<InputLeftElement pointerEvents="none">
					<SearchIcon color="gray.300" />
				</InputLeftElement>
				<Input placeholder="Search Game" />
			</InputGroup>
			<ColorModeSwitch />
		</HStack>
	)
}

export default NavBar
