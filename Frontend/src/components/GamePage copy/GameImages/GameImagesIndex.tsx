import { Box, Center, Grid, GridItem, HStack, Image, Skeleton, Stack } from '@chakra-ui/react'
import { CSSProperties, useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { GameImages } from './GameImagesSwiper'
import { IGameDetails } from '../../../interfaces/games.interface'

interface Props {
	gameDetails: IGameDetails
}

const GameMainImage = ({ gameDetails }: Props) => {
	const [selectedImage, setSelectedImage] = useState<string>(gameDetails.background_image)

	return (
		<Box as="span" rounded={'md'}>
			<Center position="relative">
				<Box style={photoBgStyle(selectedImage) as CSSProperties} />
				<Image src={selectedImage} alt="gamme banner photo" width="auto" height="90%" rounded={'lg'} border={'1px'} loading="lazy" />
			</Center>

			<Center mt={4}>
				<HStack width={'500px'}>
					<Center className="swiper-button-prev" bg={'green.300'} rounded={'full'} h={'25px'} w={'25px'}>
						<IoIosArrowBack />
					</Center>{' '}
					<Box width={'400px'}>
						<GameImages gameDetails={gameDetails} setSelectedImage={setSelectedImage} selectedImage={selectedImage} />
					</Box>
					<Center rounded={'full'} bg={'green.300'} className="swiper-button-next" w={'25px'} height={'25px'}>
						<IoIosArrowForward />
					</Center>
				</HStack>
			</Center>
		</Box>
	)
}

export default GameMainImage

function photoBgStyle(selectedImage?: string) {
	return {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		backgroundImage: `url(${selectedImage})`,
		backgroundSize: 'cover',
		filter: 'blur(25px)',
		zIndex: -1, // Place the overlay behind other content
		width: 'auto',
		height: '93%',
	}
}
