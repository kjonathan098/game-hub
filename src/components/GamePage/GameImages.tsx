import { IGameDetails } from '../../interfaces/games.interface'
import useGameScreenShots from '../../hooks/useGameScreenShots'
import { Box, Grid, GridItem, Image, SimpleGrid } from '@chakra-ui/react'

interface Props {
	gameDetails: IGameDetails
}

interface GalleryValues {
	src: string
	sizes?: string | string[] | undefined
	width: number
	height: number
	alt?: string | undefined
	key?: string | undefined
}

const GameImages = ({ gameDetails }: Props) => {
	const { galleryArray, error, loading, loadingImages } = useGameScreenShots(gameDetails.id)

	if (error) return <>error....</>
	if (loading) return <>Loading...</>
	if (loadingImages) return <>Loading. Image..</>

	return (
		<Grid w={'1fr'} h={{ base: 'fit-content', md: '500px' }} templateRows={{ base: 'repeat(5, 1fr)', md: 'repeat(2, 1fr)' }} templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={2}>
			<GridItem colSpan={{ base: 1 }} display={'flex'} overflow={'hidden'} alignItems={'center'} gap={1} justifyContent={'center'}>
				<Image src={galleryArray[0].src} objectFit={'cover'} h={'100%'} rounded={'4'} />
			</GridItem>

			<GridItem colSpan={1} display={'flex'} overflow={'hidden'} alignItems={'center'} gap={1} justifyContent={'center'}>
				<Image src={galleryArray[1].src} objectFit={'cover'} h={'100%'} rounded={4} />
			</GridItem>

			<GridItem colSpan={1} display={'flex'} overflow={'hidden'} alignItems={'center'} gap={1} justifyContent={'center'}>
				<Image src={galleryArray[2].src} objectFit={'cover'} h={'100%'} rounded={4} />
			</GridItem>

			<GridItem colSpan={1} display={'flex'} overflow={'hidden'} alignItems={'center'} gap={1} justifyContent={'center'} bg={'green'}>
				<Image src={galleryArray[3].src} objectFit={'cover'} h={'100%'} rounded={4} />
			</GridItem>

			<GridItem colSpan={{ base: 1, md: 2 }} display={'flex'} justifyContent={'space-between'} alignItems={'center'} overflow={'hidden'}>
				<Image src={galleryArray[4].src} objectFit={'cover'} h={'100%'} rounded={4} w={'100%'} />
			</GridItem>
		</Grid>
	)
}

export default GameImages
