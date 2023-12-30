import { extendTheme, ThemeConfig, ThemingProps } from '@chakra-ui/react'

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
				msOverflowStyle: 'none' /* IE and Edge */,
				scrollbarWidth: 'none' /* Firefox */,
			},
		},
	},
})

export default theme
