import { Button, HStack, List, ListItem, Collapse, Text, Stack } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import usePlatforms from '../../hooks/usePlatforms'
import { queryContext } from '../../context/queryProvider'
import { useLocation, useNavigate } from 'react-router-dom'

const PlatformList = () => {
	const [show, setShow] = useState(false)
	const { data } = usePlatforms()
	const { gamesQuery, selectPlatform } = useContext(queryContext)
	const urlLocation = useLocation()
	const nav = useNavigate()

	const handleToggle = () => setShow(!show)

	return (
		<Stack spacing={2}>
			<Text fontSize={'xl'} fontWeight={'bold'}>
				Platforms
			</Text>
			<Collapse startingHeight={100} in={show}>
				<List>
					{data.map((platform) => {
						return (
							<ListItem key={platform.id} marginBottom={'10px'}>
								<HStack key={platform.id} spacing={3}>
									<Button
										variant={'link'}
										onClick={() => {
											selectPlatform(platform)
											if (urlLocation.pathname !== '/games') {
												nav('/games')
											}
										}}
										fontWeight={gamesQuery?.platform?.id === platform.id ? 'bold' : 'normal'}
										whiteSpace={'normal'}
										textAlign={'left'}
									>
										{platform.name}
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

export default PlatformList
