import { Button } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { IGame } from '../interfaces/games.interface'
import { authContext } from '../context/authProvider'
import useToastMessage from '../hooks/useToast'

interface Params {
	game: IGame
	size?: string
}
const CartButton = ({ game, size }: Params) => {
	const { user, removeFromList, addToList, cartList } = useContext(authContext)
	const { errorToast } = useToastMessage()

	const [itsOnCart, setItsOnCart] = useState(false)

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
		if (!cartList.length) return setItsOnCart(false)

		const includes = cartList.some((item) => item.id === game.id)
		setItsOnCart(includes)
	}, [cartList, user])

	return (
		<Button size={size ? size : 'xs'} colorScheme="teal" variant={itsOnCart ? 'solid' : `outline`} onClick={handleCartList}>
			{itsOnCart ? `remove from cart ` : `Add to cart `}
		</Button>
	)
}

export default CartButton
