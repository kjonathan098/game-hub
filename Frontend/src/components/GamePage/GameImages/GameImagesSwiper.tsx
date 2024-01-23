import { wrap } from 'popmotion'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IGameDetails } from '../../../interfaces/games.interface'
import useGameScreenShots from '../../../hooks/useGameScreenShots'
import { Box, Center, HStack, Image, Skeleton, useBreakpointValue } from '@chakra-ui/react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

interface Props {
	gameDetails: IGameDetails
	setSelectedImage: (value: string) => void
	selectedImage: string
}

export const GameImages = ({ gameDetails, setSelectedImage, selectedImage }: Props) => {
	const slideViews = useBreakpointValue({ base: 1.5, md: 2.5, lg: 4.5 })
	const imageWidth = useBreakpointValue({ base: '100px' })
	const imageHeight = useBreakpointValue({ base: '70px' })
	const [slidesPerView, setlidesPerView] = useState(slideViews)

	const { galleryArray, error, loading, loadingImages } = useGameScreenShots(gameDetails.id)

	useEffect(() => {
		setlidesPerView(slideViews)
	}, [slideViews])

	useEffect(() => {
		if (!galleryArray.length) return
		galleryArray.unshift({ src: gameDetails.background_image })
	}, [galleryArray])

	if (loadingImages)
		return (
			<>
				<HStack>
					{[1, 2, 3, 4].map((num) => {
						return <Skeleton key={num} width={'100px'} height={'70px'}></Skeleton>
					})}
				</HStack>
			</>
		)

	return (
		<>
			<swiper-container slides-per-view={slidesPerView} navigation-next-el=".swiper-button-next" navigation-prev-el=".swiper-button-prev">
				{galleryArray?.map((image, index) => {
					return (
						<React.Fragment key={index}>
							<swiper-slide>
								<Box mr={{ base: '', md: 2 }}>
									<Image
										src={image.src}
										width={imageWidth}
										height={imageHeight}
										objectFit={'cover'}
										onClick={() => {
											setSelectedImage(image.src)
										}}
										_hover={{ cursor: 'pointer' }}
										opacity={selectedImage === image.src ? 1 : 0.5}
									/>
								</Box>
							</swiper-slide>
						</React.Fragment>
					)
				})}
			</swiper-container>
		</>
	)
}
