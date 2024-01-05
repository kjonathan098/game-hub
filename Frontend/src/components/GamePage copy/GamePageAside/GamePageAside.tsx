import { Box, Center, Grid, GridItem, HStack, Image, Skeleton, Stack, Tag, Text } from '@chakra-ui/react'
import { IGameDetails } from '../../../interfaces/games.interface'
import WishListButton from '../../../utils/WishListButton'
import GameTags from '../GameTags'
import GameBuyingOptions from '../GameBuyingOptions'
import CartButton from '../../../utils/CartButton'
interface Props {
	gameDetails: IGameDetails
}

const GamePageAside = ({ gameDetails }: Props) => {
	return (
		<Center h={'fit-content'}>
			<Stack justifyContent={'space-around'} h={'100%'} spacing={5}>
				<Center>
					<Text fontSize={'3xl'} fontWeight={'extrabold'}>
						{gameDetails.name}
					</Text>
				</Center>
				<Tag colorScheme="teal" w={'fit-content'} fontSize={'2xl'}>
					$30
				</Tag>
				<WishListButton size="lg" game={gameDetails} />
				<CartButton size="lg" game={gameDetails} />

				<Text fontSize={'2xl'} fontWeight={'bold'} border={'2px'} borderColor={'purple.300'} rounded={'md'} p={4}>
					Rating {gameDetails.rating}
				</Text>
				<Text fontSize={'2xl'} fontWeight={'bold'} border={'2px'} borderColor={'purple.300'} rounded={'md'} p={4}>
					Playtime {gameDetails.playtime}
				</Text>
				<Text fontSize={'2xl'} fontWeight={'bold'} border={'2px'} borderColor={'purple.300'} rounded={'md'} p={4}>
					Esrb_Rating {gameDetails.esrb_rating.name}
				</Text>

				<GameBuyingOptions gameDetails={gameDetails} />
				<GameTags gameDetails={gameDetails} />
			</Stack>
		</Center>
	)
}

export default GamePageAside
