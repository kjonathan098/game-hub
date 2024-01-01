import { Box, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import OutsideClickHandler from 'react-outside-click-handler'

import { IGame } from '../../interfaces/games.interface'
import useSearch from '../../hooks/useSearch'
import { useNavigate } from 'react-router-dom'

interface Props {
	dataResponse: IGame[]
	showResults: boolean
	setShowResults: React.Dispatch<React.SetStateAction<boolean>>
}

const SearchResponse = ({ dataResponse, showResults, setShowResults }: Props) => {
	const nav = useNavigate()
	const { setSearchQuery } = useSearch()

	const handleClickOutside = () => {
		setSearchQuery('')
		setShowResults(false)
	}
	const navigateGamePage = (gameId: number) => {
		setSearchQuery('')
		nav(`/game/${gameId}`, { state: { id: gameId } })
	}
	return (
		<>
			{showResults && dataResponse?.length && (
				<OutsideClickHandler onOutsideClick={handleClickOutside}>
					<Box bg={'blackAlpha.900'} position={'absolute'} w={'80%'} top={'40px'} h={'300px'} zIndex={1} overflow={'scroll'}>
						<VStack>
							{dataResponse.map((game) => {
								return (
									<HStack
										p={2}
										_hover={{ bg: 'blue.500' }}
										w={'100%'}
										onClick={() => {
											navigateGamePage(game.id)
											handleClickOutside()
										}}
										key={game.id}
									>
										<Image src={game.background_image} width={'75px'} height={'100px'} objectFit={'cover'} />
										<Text fontSize={'xl'} fontWeight={'bold'}>
											{game.name}
										</Text>
									</HStack>
								)
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
