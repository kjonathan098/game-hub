import { extendTheme, ThemeConfig, ThemingProps } from '@chakra-ui/react'

const config: ThemeConfig = {
	initialColorMode: 'dark',
}

const theme = extendTheme({
	config,
	styles: {
		global: (props: { colorMode: string }) => ({
			'*': {
				'&::-webkit-scrollbar': {
					display: 'none',
				},
				msOverflowStyle: 'none', // IE and Edge
				scrollbarWidth: 'none', // Firefox
			},
			// rest of the global styles
			body: {
				bg: props.colorMode === 'dark' ? 'blackAlpha.100' : 'blackAlpha.100', // Dark mode background
				color: props.colorMode === 'dark' ? '#cfcfd9' : 'black', // Dark mode text
			},
		}),
	},
})

export default theme
