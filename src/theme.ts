import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
	initialColorMode: 'dark',
}

const theme = extendTheme({
	config,
	styles: {
		global: {
			'*': {
				'&::-webkit-scrollbar': {
					display: 'none',
				},
				'-ms-overflow-style': 'none' /* IE and Edge */,
				'scrollbar-width': 'none' /* Firefox */,
			},
		},
	},
})

export default theme
