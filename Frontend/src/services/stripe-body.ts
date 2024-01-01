import { IGame, IGameDetails } from '../interfaces/games.interface'

type stripeBody = {
	price_data: {
		currency: string
		product_data: { name: string; images: string[] }
		unit_amount: number
	}
	quantity: number
}

const createBodyForStripe = (cart: IGame[]) => {
	const newArr: stripeBody[] = []
	cart.forEach((game) => {
		newArr.push({
			price_data: {
				currency: 'usd',
				product_data: {
					name: game.name,
					images: [game.background_image],
				},
				unit_amount: game.price! * 100,
			},
			quantity: 1,
		})
	})
	return newArr
}

export default createBodyForStripe
