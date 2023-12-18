import { Box, Button, Card, CardBody, HStack, Heading, Image, VStack } from '@chakra-ui/react'
import { IGame, IGameDetails } from '../../interfaces/games.interface'
import GamePlatforms from './GamePlatforms'
import Score from './Score'
import cropImage from '../../services/img-crop'
import { useNavigate } from 'react-router-dom'
import { CiCirclePlus } from 'react-icons/ci'
import { ApiHander } from '../../fireBase/fireBase.config'
import { useContext } from 'react'
import { authContext } from '../../context/authProvider'

interface GameCardProps {
	game: IGameDetails
}

const GameCard = ({ game }: GameCardProps) => {
	const { user, addToWishList } = useContext(authContext)
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
					<HStack justifyContent={'space-between'}>
						<GamePlatforms platforms={game.parent_platforms.map((p) => p.platform)} />
						<Score score={game.metacritic} />
					</HStack>
					<Heading fontSize={'2xlg'}>{game.name}</Heading>
					<HStack>
						<Button
							size={'xs'}
							variant="outline"
							colorScheme="whatsapp"
							onClick={() => {
								if (!user) return
								addToWishList(game)
							}}
						>
							Add to wish list
						</Button>
						<Button size={'xs'} colorScheme="teal" variant="outline" onClick={() => {}}>
							Add to Cart
						</Button>
					</HStack>
				</VStack>
			</CardBody>
		</Card>
	)
}

export default GameCard
