import { useContext, useState } from 'react'
import useGenre from '../../hooks/useGenre'
import { Button, HStack, Image, List, ListItem, Spinner, Collapse, Text, Stack } from '@chakra-ui/react'
import cropImage from '../../services/img-crop'
import { queryContext } from '../../context/queryProvider'
import { useLocation, useNavigate } from 'react-router-dom'

const GenreList = () => {
	const [show, setShow] = useState(false)
	const { gamesQuery, searchGenre } = useContext(queryContext)
	const { data, error, loading } = useGenre()
	const urlLocation = useLocation()
	const nav = useNavigate()

	const handleToggle = () => setShow(!show)

	if (loading) return <Spinner />
	if (error) return null

	return (
		<Stack spacing={2}>
			<Text fontSize={'xl'} fontWeight={'bold'}>
				Genres
			</Text>
			<Collapse startingHeight={200} in={show}>
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
											if (urlLocation.pathname !== '/games') {
												nav('/games')
											}
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
			<Button size="sm" onClick={handleToggle}>
				{show ? 'Hide' : 'Show All'}
			</Button>
		</Stack>
	)
}

export default GenreList
