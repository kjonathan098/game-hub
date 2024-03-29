import { Box, Card, CardBody, Center, Grid, GridItem, HStack, Skeleton, SkeletonText, Stack, useBreakpointValue } from '@chakra-ui/react'
import GameCardContainer from '../components/GamesDisplay/GameCardContainer'

export const GamesSwiperSkeleton = () => {
	return (
		<Stack mt={3}>
			<Box w={{ base: '100vw', lg: '1200px' }} pl={{ base: 2 }}>
				<HStack>
					{Array(5)
						.fill(0)
						.map((_, i) => (
							<Stack width={{ base: '173px', lg: '230px' }} spacing={3} key={i}>
								<Skeleton height={{ base: '230px', lg: '300px' }} width={{ base: '173px', lg: 'auto' }} rounded={'md'} mr={3} />
								<Skeleton height="20px" width="80%" />
								<Skeleton height="20px" width="60%" />
							</Stack>
						))}
				</HStack>
			</Box>
		</Stack>
	)
}

export const GamePageSkeleton = () => {
	const imageWidth = useBreakpointValue({ base: '200px', md: '125px', lg: '100px' })
	const imageHeight = useBreakpointValue({ base: '110px', md: '125px', lg: '70px' })
	return (
		<Box>
			<Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={2} w={{ base: '100vw', lg: '1200px' }} h={'90vh'}>
				<GridItem minW={{ base: '100%', lg: '900px' }}>
					<Skeleton h={'500px'} w={'900px'} mb={3} />
					<Center w={'900px'}>
						<HStack spacing={3}>
							{Array(5)
								.fill(0)
								.map((_, index) => {
									return <Skeleton key={index} width={imageWidth} h={imageHeight} />
								})}
						</HStack>
					</Center>
				</GridItem>
				<GridItem p={2}>
					<Box height={'100%'}>
						<Center h={'100%'}>
							<Stack justifyContent={'space-around'} h={'100%'} spacing={5}>
								<Center>
									<Skeleton width={'200px'} h={'50px'} />
								</Center>
								<Skeleton w={'100px'} h={'30px'} />
								<Skeleton size="lg" w={'200px'} h={'48px'} />
								<Skeleton size="lg" w={'200px'} h={'48px'} />
								<Skeleton size="lg" w={'200px'} h={'32px'} />
								<Skeleton size="lg" w={'200px'} h={'32px'} />
								<Skeleton size="lg" w={'200px'} h={'32px'} />
							</Stack>
						</Center>
					</Box>
				</GridItem>
			</Grid>
		</Box>
	)
}

export const GameAwardsSkeleton = () => {
	return (
		<Box minH={'500px'}>
			{Array(5)
				.fill(0)
				.map((_, index) => {
					return (
						<Box width={'500px'} bg={'blackAlpha.300'} key={index} mb={3}>
							<Stack direction="row" p={3}>
								<Skeleton bg={'red'} w={'100px'} h={'80px'} />
								<Stack justifyContent={'space-around'}>
									<Skeleton w={'100px'} h={'10px'} />
									<Skeleton w={'200px'} h={'10px'} />
									<Skeleton w={'50px'} h={'10px'} />
								</Stack>
							</Stack>
						</Box>
					)
				})}
		</Box>
	)
}

export const RedditPostsSkeleton = () => {
	return (
		<Box minH={'500px'}>
			{Array(5)
				.fill(0)
				.map((_, index) => {
					return (
						<Box width={'500px'} bg={'blackAlpha.300'} key={index} mb={3}>
							<HStack mb={3}>
								<Skeleton w={'50px'} h={'50px'} rounded={'full'} />
								<Skeleton w={'100px'} h={'20px'} />
							</HStack>
							<Stack justifyContent={'space-around'}>
								<Skeleton w={'100%'} h={'25px'} />
								<Skeleton w={'200px'} h={'10px'} />
								<Skeleton w={'50px'} h={'10px'} />
							</Stack>
						</Box>
					)
				})}
		</Box>
	)
}

export const GameCardSkeleton = () => {
	return (
		<>
			{Array(8)
				.fill(0)
				.map((_, i) => {
					return (
						<GameCardContainer key={i}>
							<Card>
								<Skeleton height={'200px'} />
								<CardBody>
									<SkeletonText />
								</CardBody>
							</Card>
						</GameCardContainer>
					)
				})}
		</>
	)
}
