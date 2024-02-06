import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
import OutsideClickHandler from 'react-outside-click-handler'

import { IGame } from '../../interfaces/games.interface'
import useSearch from '../../hooks/useSearch'
import { useNavigate } from 'react-router-dom'

interface Props {
	dataResponse: IGame[]
	showResults: boolean
	setShowResults: React.Dispatch<React.SetStateAction<boolean>>
	setInputValue: React.Dispatch<React.SetStateAction<string>>
}

const SearchResponse = ({ dataResponse, showResults, setShowResults, setInputValue }: Props) => {
	const nav = useNavigate()
	const { setSearchQuery } = useSearch()

	const handleClickOutside = () => {
		setInputValue('')
		setSearchQuery('')
		setShowResults(false)
	}
	const navigateGamePage = (gameId: number) => {
		setInputValue('')
		setSearchQuery('')
		nav(`/game/${gameId}`, { state: { id: gameId } })
	}
	return (
		<>
			{showResults && dataResponse?.length && (
				<OutsideClickHandler onOutsideClick={handleClickOutside}>
					<Box bg={'red'} opacity={1} position={'absolute'} w={{ base: '100vw', lg: '80%' }} top={{ base: '48px', lg: '40px' }} left={{ base: '-100px', lg: '100px' }} h={'300px'} zIndex={99} overflow={'scroll'}>
						<VStack>
							{dataResponse.map((game) => {
								return (
									<HStack
										p={2}
										_hover={{ bg: 'blue.500' }}
										w={'100%'}
										bg={'whiteAlpha.200'}
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
