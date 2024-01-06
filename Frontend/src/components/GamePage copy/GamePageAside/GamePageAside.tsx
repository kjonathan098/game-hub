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
	return (
		<Center h={'100%'}>
			<Stack justifyContent={'space-around'} h={'100%'} spacing={5}>
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

				<Tag fontWeight={'bold'} colorScheme="purple" rounded={'md'} p={2}>
					Rating {gameDetails.rating}
				</Tag>
				<Tag fontWeight={'bold'} colorScheme="orange" rounded={'md'} p={2}>
					Playtime {gameDetails.playtime}
				</Tag>
				<Tag fontWeight={'bold'} colorScheme="pink" rounded={'md'} p={2}>
					Esrb_Rating {gameDetails.esrb_rating?.name}
				</Tag>

				<GameBuyingOptions gameDetails={gameDetails} />
				<GameTags gameDetails={gameDetails} />
			</Stack>
		</Center>
	)
}

export default GamePageAside
