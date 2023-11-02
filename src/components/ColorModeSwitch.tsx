import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {
	const { toggleColorMode, colorMode } = useColorMode()

	return (
		<HStack>
			<Switch id="darkMode" colorScheme="green" isChecked={colorMode === 'dark' ? true : false} onChange={toggleColorMode} />
			<Text margin="0">Dark Mode</Text>
		</HStack>
	)
}

export default ColorModeSwitch
