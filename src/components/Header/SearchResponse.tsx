import { Box, Stack, Text, VStack } from '@chakra-ui/react'
import OutsideClickHandler from 'react-outside-click-handler'

import { IGame } from '../../interfaces/games.interface'
import { useEffect, useState } from 'react'
import useSearch from '../../hooks/useSearch'

interface Props {
	dataResponse: IGame[]
	showResults: boolean
	setShowResults: React.Dispatch<React.SetStateAction<boolean>>
}

const SearchResponse = ({ dataResponse, showResults, setShowResults }: Props) => {
	const handleClickOutside = () => {
		setShowResults(false)
	}

	return (
		<>
			{showResults && dataResponse?.length && (
				<OutsideClickHandler onOutsideClick={handleClickOutside}>
					<Box bg={'blue.700'} position={'absolute'} w={'100%'} top={'40px'} h={'300px'} zIndex={1} overflow={'scroll'}>
						<VStack>
							{dataResponse.map((game) => {
								return <Text key={game.id}>{game.name}</Text>
							})}
						</VStack>
					</Box>
				</OutsideClickHandler>
			)}
		</>
	)
	return <></>
}

export default SearchResponse
