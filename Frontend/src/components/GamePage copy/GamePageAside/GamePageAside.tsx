import { Box, Center, Grid, GridItem, HStack, Image, Skeleton, Stack, Tag, Text } from '@chakra-ui/react'
import { IGameDetails } from '../../../interfaces/games.interface'
import WishListButton from '../../../utils/WishListButton'
import GameTags from './GameTags'
import GameBuyingOptions from './GameBuyingOptions'
import CartButton from '../../../utils/CartButton'
interface Props {
	gameDetails: IGameDetails
}

const GamePageAside = ({ gameDetails }: Props) => {
	const sharedTagStyles = {
		fontWeight: 'bold',
		rounded: 'md',
		p: 2,
		justifyContent: 'center',
		fontSize: { md: 'lg', lg: '' },
	}

	return (
		<Center h={'100%'}>
			<Stack justifyContent={'space-around'} h={'100%'} spacing={4}>
				<Center>
					<Text fontSize={'3xl'} fontWeight={'extrabold'}>
						{gameDetails.name}
					</Text>
				</Center>
				<Tag colorScheme="teal" w={'fit-content'} fontSize={'2xl'}>
					${gameDetails.price}
				</Tag>
				<WishListButton size="lg" game={gameDetails} />
				<CartButton size="lg" game={gameDetails} />

				<Stack>
					<Tag colorScheme="purple" {...sharedTagStyles}>
						Rating - {gameDetails.rating}
					</Tag>
					<Tag colorScheme="orange" {...sharedTagStyles}>
						Playtime - {gameDetails.playtime}
					</Tag>
					<Tag colorScheme="pink" {...sharedTagStyles}>
						Esrb Rating - {gameDetails.esrb_rating?.name}
					</Tag>
				</Stack>

				<GameBuyingOptions gameDetails={gameDetails} />
				<GameTags gameDetails={gameDetails} />
			</Stack>
		</Center>
	)
}

export default GamePageAside
