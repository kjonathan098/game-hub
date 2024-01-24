import { Box, Card, CardBody, HStack, Heading, Image, Stack, Tag, VStack } from '@chakra-ui/react'
import { IGame } from '../../interfaces/games.interface'
import GamePlatforms from './GamePlatforms'
import Score from './Score'
import cropImage from '../../services/img-crop'
import { useNavigate } from 'react-router-dom'

import WishListButton from '../../utils/WishListButton'
import CartButton from '../../utils/CartButton'

interface GameCardProps {
	game: IGame
}

const GameCard = ({ game }: GameCardProps) => {
	const navigate = useNavigate()

	const navigateGamePage = () => {
		navigate(`/game/${game.id}`, { state: { id: game.id } })
	}

	return (
		<Card _hover={{ scale: '10x' }}>
			<Box position="relative" onClick={navigateGamePage} _hover={{ cursor: 'pointer' }}>
				<Image src={cropImage(game.background_image)} />
			</Box>
			<CardBody>
				<VStack alignItems={'start'} spacing={3}>
					<HStack justifyContent={'space-between'} width={'100%'}>
						<HStack width={'fit-content'}>
							<GamePlatforms platforms={game.parent_platforms.map((p) => p.platform)} />
							<Score score={game.metacritic} />
						</HStack>
						<Tag variant="subtle" colorScheme="cyan" fontWeight={'bold'}>
							${game.price}
						</Tag>
					</HStack>
					<HStack justifyContent={'space-between'} width={'100%'}>
						<Heading fontSize={'2xlg'}>{game.name}</Heading>
					</HStack>
					<Stack w={'100%'}>
						<WishListButton game={game} />
						<CartButton game={game} />
					</Stack>
				</VStack>
			</CardBody>
		</Card>
	)
}

export default GameCard
