import { Box, Button, Collapse, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { IGameDetails } from '../../interfaces/games.interface'
import ReactHtmlParser from 'react-html-parser'

interface Props {
	data: IGameDetails
}
const GameSummary = ({ data }: Props) => {
	const [show, setShow] = React.useState(false)

	const handleToggle = () => setShow(!show)

	const getEnglishText = (text: string): string => {
		const index = text.indexOf('Español')
		const englishPortion = index !== -1 ? text.substring(0, index) : text

		return englishPortion
	}

	return (
		<Box p={4} pl={12}>
			<Text fontSize={{ base: '2xl', md: '5xl' }} fontWeight={'bold'}>
				About
			</Text>
			<Collapse startingHeight={100} in={show}>
				{ReactHtmlParser(getEnglishText(data?.description))}
			</Collapse>
			<Button size="sm" onClick={handleToggle} mt="1rem">
				Show {show ? 'Less' : 'More'}
			</Button>
		</Box>
	)
}

export default GameSummary
