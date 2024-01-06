import { Box, HStack, Stack, Text, Image, VStack } from '@chakra-ui/react'
import avatarGamer from '../../../assets/gamerAvatar.jpeg'
import { IGameReviewResults, IgameReviews } from '../../../interfaces/games.interface'
import useData from '../../../hooks/useDataFetch'
import { Rating } from 'react-simple-star-rating'
import { useState } from 'react'

const GameReviews = ({ gameId }: { gameId: number }) => {
	const { data: gameRevies, loading: loadingReviews } = useData<IGameReviewResults>(`/games/${gameId}/reviews?key=4f125506b6604b8a83e4deeb10165775`)

	if (loadingReviews) return <>Loading...</>

	return (
		<>
			<Box width={'100%'}>
				<Stack>
					<HStack maxW={'1200px'} overflow={'scroll'} minH={'200px'} alignItems="stretch">
						{gameRevies?.slice(0, 10).map((review, index) => {
							return (
								<Stack key={index} p={2} border={'1px'} rounded={'md'} borderColor={'gray.600'} bg="blackAlpha.700">
									<HStack>
										<Image src={review.user.avatar || avatarGamer} width={'30px'} height={'30px'} rounded={'full'} />
										<Text>{review.user.full_name?.length ? review.user.full_name : review.user.username}</Text>
									</HStack>
									<Rating initialValue={review.rating} SVGstyle={{ display: 'inline-block' }} readonly size={20} allowFraction fillColor={'#68D391'} />
									<Text fontSize={'sm'} color={'gray.500'} width={'300px'}>
										{getFirstThreeSentences(review.text)}
									</Text>
								</Stack>
							)
						})}
					</HStack>
				</Stack>
			</Box>
		</>
	)
}

export default GameReviews

function getFirstThreeSentences(text: string): string {
	// put each sentence as a value in array
	const sentences = text.match(/(.*?[.!?])\s/g)

	if (!sentences) {
		return text
	}

	let charCount = 0
	const selectedSentences = []

	// This is to keep height consistency to an acceptable level (some users write long sentences withouth proper grammar making it way to big) We only take max 300 chars
	// but also not cutting the review in a middle of a sentence.
	for (let sentence of sentences) {
		if (charCount + sentence.length > 300) {
			break
		}
		charCount += sentence.length
		selectedSentences.push(sentence)
	}

	return selectedSentences.join(' ').trim()
}
