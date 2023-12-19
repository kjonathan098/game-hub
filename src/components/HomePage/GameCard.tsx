import { Box, Button, Card, CardBody, HStack, Heading, Image, VStack, useToast } from '@chakra-ui/react'
import { IGame, IGameDetails } from '../../interfaces/games.interface'
import GamePlatforms from './GamePlatforms'
import Score from './Score'
import cropImage from '../../services/img-crop'
import { useNavigate } from 'react-router-dom'
import { CiCirclePlus } from 'react-icons/ci'
import { ApiHander } from '../../fireBase/fireBase.config'
import { useContext, useEffect, useState } from 'react'
import { authContext } from '../../context/authProvider'
import useToastMessage from '../../hooks/useToast'

interface GameCardProps {
	game: IGameDetails
}

const GameCard = ({ game }: GameCardProps) => {
	const navigate = useNavigate()
	const { user, addToList, removeFromList, wishList, cartList } = useContext(authContext)
	const { showToast, errorToast } = useToastMessage()
	const [itOnWishList, setItOnWishList] = useState(false)
	const [itsOnCart, setItsOnCart] = useState(false)

	const navigateGamePage = () => {
		navigate(`/game/${game.id}`, { state: { id: game.id } })
	}

	function handleWishList() {
		if (!user) return errorToast('please sign in!')
		if (itOnWishList) {
			removeFromList(game, 'wishList')
		} else {
			addToList(game, 'wishList')
		}
	}

	function handleCartList() {
		if (!user) return errorToast('please sign in!')
		if (itsOnCart) {
			removeFromList(game, 'cartList')
		} else {
			addToList(game, 'cartList')
		}
	}

	useEffect(() => {
		if (!user) return
		if (!wishList.length) return setItOnWishList(false)

		const includes = wishList.some((item) => item.id === game.id)
		setItOnWishList(includes)
	}, [wishList, user])

	useEffect(() => {
		if (!user) return
		if (!cartList.length) return setItsOnCart(false)

		const includes = cartList.some((item) => item.id === game.id)
		setItsOnCart(includes)
	}, [cartList, user])

	return (
		<Card _hover={{ scale: '10x' }}>
			<Box position="relative" onClick={navigateGamePage} _hover={{ cursor: 'pointer' }}>
				<Image src={cropImage(game.background_image)} />
			</Box>
			<CardBody>
				<VStack alignItems={'start'} spacing={3}>
					<HStack justifyContent={'space-between'}>
						<GamePlatforms platforms={game.parent_platforms.map((p) => p.platform)} />
						<Score score={game.metacritic} />
					</HStack>
					<Heading fontSize={'2xlg'}>{game.name}</Heading>
					<HStack>
						<Button size={'xs'} variant={itOnWishList ? 'solid' : `outline`} colorScheme="whatsapp" onClick={handleWishList}>
							{itOnWishList ? `remove from wish list` : `Add to wish list`}
						</Button>
						<Button size={'xs'} colorScheme="teal" variant={itsOnCart ? 'solid' : `outline`} onClick={handleCartList}>
							{itsOnCart ? `remove from cart ` : `Add to cart `}
						</Button>
					</HStack>
				</VStack>
			</CardBody>
		</Card>
	)
}

export default GameCard
