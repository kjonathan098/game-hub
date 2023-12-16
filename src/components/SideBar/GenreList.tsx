import { useContext, useEffect, useState } from 'react'
import useGenre from '../../hooks/useGenre'
import { Button, HStack, Image, List, ListItem, Spinner, Box, Collapse, Text, Stack } from '@chakra-ui/react'
import cropImage from '../../services/img-crop'
import { queryContext } from '../../context/queryProvider'

const GenreList = () => {
	const [show, setShow] = useState(false)

	const { gamesQuery, searchGenre } = useContext(queryContext)
	const { data, error, loading } = useGenre()

	const handleToggle = () => setShow(!show)

	useEffect(() => {}, [])

	if (loading) return <Spinner />
	if (error) return null

	return (
		<Stack spacing={2}>
			<Text fontSize={'xl'} fontWeight={'bold'}>
				Genres
			</Text>
			<Collapse startingHeight={300} in={show}>
				<List>
					{data.map((genre) => {
						return (
							<ListItem key={genre.id} marginBottom={'10px'}>
								<HStack key={genre.id} spacing={3}>
									<Image src={cropImage(genre.image_background)} boxSize={'32px'} borderRadius={8} objectFit={'cover'} />
									<Button
										variant={'link'}
										onClick={() => {
											searchGenre(genre)
										}}
										fontWeight={gamesQuery?.genre?.id === genre.id ? 'bold' : 'normal'}
										whiteSpace={'normal'}
										textAlign={'left'}
									>
										{genre.name}
									</Button>
								</HStack>
							</ListItem>
						)
					})}
				</List>
			</Collapse>
			<Button size="sm" onClick={handleToggle} mt={'-15px'}>
				{show ? 'Hide' : 'Show All'}
			</Button>
		</Stack>
	)
}

export default GenreList
