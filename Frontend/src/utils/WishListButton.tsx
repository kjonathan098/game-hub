import { Button } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import { authContext } from '../context/authProvider'
import useToastMessage from '../hooks/useToast'
import { IGame, IGameDetails } from '../interfaces/games.interface'

interface Params {
	game: IGame
	size?: string
}

const WishListButton = ({ game, size }: Params) => {
	const { wishList, user, removeFromList, addToList } = useContext(authContext)
	const { errorToast } = useToastMessage()
	const [itOnWishList, setItOnWishList] = useState(false)

	function handleWishList() {
		if (!user) return errorToast('please sign in!')
		if (itOnWishList) {
			removeFromList(game, 'wishList')
		} else {
			addToList(game, 'wishList')
		}
	}

	useEffect(() => {
		if (!user) return
		if (!wishList.length) return setItOnWishList(false)

		const includes = wishList.some((item) => item.id === game.id)

		setItOnWishList(includes)
	}, [user, wishList, game])

	return (
		<Button size={size ? size : 'xs'} variant={itOnWishList ? 'solid' : `outline`} colorScheme="whatsapp" onClick={handleWishList}>
			{itOnWishList ? `remove from wish list` : `Add to wish list`}
		</Button>
	)
}

export default WishListButton
