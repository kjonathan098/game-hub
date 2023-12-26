import { Box, Stack, Text, VStack } from '@chakra-ui/react'
import OutsideClickHandler from 'react-outside-click-handler'

import { IGame } from '../../interfaces/games.interface'
import { useEffect, useState } from 'react'

interface Props {
	rapidData: IGame[]
	rapidLoading: boolean
}

const SearchResponse = ({ rapidData, rapidLoading }: Props) => {
	const [showResults, setShowResults] = useState(true)
	useEffect(() => {
		console.log(rapidData)
	}, [])
	const handleClickOutside = () => {
		setShowResults(false)
	}
	if (rapidLoading) return <>loading...</>

	return (
		<>
			{showResults && (
				<OutsideClickHandler onOutsideClick={handleClickOutside}>
					<Box bg={'blue.700'} position={'absolute'} w={'100%'} top={'40px'} h={'300px'} zIndex={1} overflow={'scroll'}>
						{/* <VStack>
					{rapidData.map((game) => {
						return <Text>{game.name}</Text>
					})}
				</VStack> */}
					</Box>
				</OutsideClickHandler>
			)}
		</>
	)
	return <></>
}

export default SearchResponse
