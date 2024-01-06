import './GameImages.css'
import { wrap } from 'popmotion'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IGameDetails } from '../../interfaces/games.interface'
import useGameScreenShots from '../../hooks/useGameScreenShots'

interface Props {
	gameDetails: IGameDetails
}

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		}
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		}
	},
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity
}

export const GameImages = ({ gameDetails }: Props) => {
	const [[page, direction], setPage] = useState([0, 0])
	const { galleryArray, error, loading, loadingImages } = useGameScreenShots(gameDetails.id)

	if (error) return <>error....</>
	if (loading) return <>Loading...</>
	if (loadingImages) return <>Loading. Image..</>
	if (!galleryArray.length) return <>no Images</>

	const imageIndex = wrap(0, galleryArray.length, page)

	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection])
	}

	return (
		<div className="example-container ">
			<AnimatePresence initial={false} custom={direction}>
				<motion.img
					key={page}
					src={galleryArray[imageIndex].src}
					custom={direction}
					variants={variants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{
						x: { type: 'spring', stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					drag="x"
					dragConstraints={{ left: 0, right: 0 }}
					dragElastic={1}
					onDragEnd={(_e, { offset, velocity }) => {
						const swipe = swipePower(offset.x, velocity.x)

						if (swipe < -swipeConfidenceThreshold) {
							paginate(1)
						} else if (swipe > swipeConfidenceThreshold) {
							paginate(-1)
						}
					}}
				/>
			</AnimatePresence>
			<div className="next" onClick={() => paginate(1)}>
				{'‣'}
			</div>
			<div className="prev" onClick={() => paginate(-1)}>
				{'‣'}
			</div>
		</div>
	)
}
