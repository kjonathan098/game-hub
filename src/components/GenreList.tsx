import { useEffect } from 'react'
import useGenre from '../hooks/useGenre'
import { Button, HStack, Image, List, ListItem, Spinner, Text, VStack } from '@chakra-ui/react'
import cropImage from '../services/img-crop'

const GenreList = () => {
	const { data, error, loading } = useGenre()

	useEffect(() => {}, [])

	if (loading) return <Spinner />
	if (error) return null

	return (
		<List padding={'5px'}>
			{data.map((genre) => {
				return (
					<ListItem marginBottom={'10px'}>
						<HStack key={genre.id} spacing={3}>
							<Image src={cropImage(genre.image_background)} boxSize={'32px'} borderRadius={8} />
							<Button>
								<Text key={genre.id} fontSize={'lg'}>
									{genre.name}
								</Text>
							</Button>
						</HStack>
					</ListItem>
				)
			})}
		</List>
	)
}

export default GenreList
