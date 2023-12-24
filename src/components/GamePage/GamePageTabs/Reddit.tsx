import React, { useEffect, useState } from 'react'
import { IGameDetails, IReddit } from '../../../interfaces/games.interface'
import useTabsFetch from '../../../hooks/useTabsFetch'
import { Box, Button, Collapse, HStack, Image, Spinner, Stack, Text, VStack } from '@chakra-ui/react'

interface Props {
	game: IGameDetails
}
interface CollapeSableTextProps {
	text: string
}

const CollapeSableText = ({ text }: CollapeSableTextProps) => {
	const [show, setShow] = useState(false)
	const handleToggle = () => setShow(!show)

	return (
		<>
			<Collapse startingHeight={100} in={show}>
				<Text>{text}</Text>
			</Collapse>
			<Button size={'sm'} onClick={handleToggle} mt="1rem">
				Show {show ? 'Less' : 'More'}
			</Button>
		</>
	)
}

const Reddit = ({ game }: Props) => {
	const { data, loading, error } = useTabsFetch<IReddit>(game, 'reddit')
	const [show, setShow] = React.useState(false)

	if (loading) return <Spinner color={'blue.500'} />
	return (
		<Stack spacing={4}>
			{data
				.filter((post) => post.text !== '')
				.map((post) => {
					return (
						<Stack bg={'blackAlpha.700'} rounded={'2xl'} p={4}>
							<HStack>
								<Image src={post.image ? post.image : game.background_image} rounded={'full'} width={'100px'} height={'100px'} objectFit={'cover'} />
								<Stack>
									<Text>{post.username}</Text>
									<CollapeSableText text={post.text} />{' '}
								</Stack>
							</HStack>
						</Stack>
					)
				})}
		</Stack>
	)
}

export default Reddit
