import './GameImages.css'
import { wrap } from 'popmotion'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IGameDetails } from '../../interfaces/games.interface'
import useGameScreenShots from '../../hooks/useGameScreenShots'
import { Center, HStack, Image, Skeleton } from '@chakra-ui/react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

interface Props {
	gameDetails: IGameDetails
	setSelectedImage: (value: string | undefined) => void
}

export const GameImages = ({ gameDetails, setSelectedImage }: Props) => {
	const { galleryArray, error, loading, loadingImages } = useGameScreenShots(gameDetails.id)

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
			<swiper-container slides-per-view={3.5} navigation-next-el=".swiper-button-next" navigation-prev-el=".swiper-button-prev">
				{galleryArray?.map((image, index) => {
					return (
						<React.Fragment key={index}>
							<swiper-slide>
								<Image
									src={image.src}
									width={'100px'}
									height={'70px'}
									objectFit={'cover'}
									onClick={() => {
										setSelectedImage(image.src)
									}}
									_hover={{ cursor: 'pointer' }}
								/>
							</swiper-slide>
						</React.Fragment>
					)
				})}
			</swiper-container>
		</>
	)
}
