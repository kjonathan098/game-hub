import { HStack, Icon, Switch, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ColorModeSwitch = () => {
	const { toggleColorMode, colorMode } = useColorMode()

	return (
		<HStack>
			<Switch id="darkMode" colorScheme="green" isChecked={colorMode === 'dark' ? true : false} onChange={toggleColorMode} />
			<Icon as={colorMode === 'dark' ? MoonIcon : SunIcon} />
		</HStack>
	)
}

export default ColorModeSwitch
