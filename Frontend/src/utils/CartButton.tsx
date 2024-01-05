import { Button } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import { IGame } from '../interfaces/games.interface'
import { authContext } from '../context/authProvider'
import useToastMessage from '../hooks/useToast'
import axios from 'axios'

interface Params {
	game: IGame
	size?: string
}
const CartButton = ({ game, size }: Params) => {
	const { user, removeFromList, addToList, cartList } = useContext(authContext)
	const { errorToast } = useToastMessage()

	const [itsOnCart, setItsOnCart] = useState(false)

	function handleCartList(event: React.MouseEvent<HTMLButtonElement>) {
		event.stopPropagation()
		if (!user) return errorToast('please sign in!')
		if (itsOnCart) {
			removeFromList(game, 'cartList')
		} else {
			addToList(game, 'cartList')
		}
	}

	useEffect(() => {
		if (!user) return
		if (!cartList.length) return setItsOnCart(false)

		const includes = cartList.some((item) => item.id === game.id)
		setItsOnCart(includes)
	}, [cartList, user, game])

	return (
		<Button size={size ? size : 'xs'} colorScheme="teal" variant={itsOnCart ? 'solid' : `outline`} onClick={handleCartList}>
			{itsOnCart ? `Remove from Cart ` : `Add to Cart `}
		</Button>
	)
}

export default CartButton
