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
		<Center h={'100%'}>
			<Stack justifyContent={'space-around'} h={'100%'}>
				<Text fontSize={'3xl'} fontWeight={'extrabold'}>
					{gameDetails.name}
				</Text>
				<Tag colorScheme="teal" w={'fit-content'} fontSize={'2xl'}>
					$30
				</Tag>
				<WishListButton size="lg" game={gameDetails} />
				<CartButton size="lg" game={gameDetails} />
				<GameBuyingOptions gameDetails={gameDetails} />
				<GameTags gameDetails={gameDetails} />
			</Stack>
		</Center>
	)
}

export default GamePageAside
