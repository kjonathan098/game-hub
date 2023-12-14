import { Box, Button, HStack, Image, Stack, Text } from '@chakra-ui/react'
import { IGameDetails } from '../../interfaces/games.interface'

interface Props {
	data: IGameDetails
}
const GameBuyingOptions = ({ data }: Props) => {
	console.log(data)

	return (
		<Box>
			<Text fontSize={'2xl'}>More Buying Options</Text>
			<Stack direction={{ base: 'column', lg: 'row' }} flexWrap={'wrap'}>
				{data.stores.map((item) => {
					return (
						<a target="_black" href={`https://${item.store.domain}`}>
							<Button>
								<Text>{item.store.name}</Text>
							</Button>
						</a>
					)
				})}
			</Stack>
		</Box>
	)
}
export default GameBuyingOptions
