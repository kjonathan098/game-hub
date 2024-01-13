import { IGameRatings } from '../interfaces/games.interface'

export function sortRatings(ratings: IGameRatings[]) {
	const order = ['exceptional', 'recommended', 'meh', 'skip']
	const sortedRatings = ratings.sort((a, b) => order.indexOf(a.title) - order.indexOf(b.title))

	const sortedRatingsWithColor = sortedRatings.map((rating) => {
		let color
		let emoji
		switch (rating.title) {
			case 'exceptional':
				color = '#60a058'
				emoji = '🤩'
				break
			case 'recommended':
				color = '#085856'
				emoji = '😊'
				break
			case 'meh':
				color = '#3c103b'
				emoji = '😑'

				break
			case 'skip':
				color = '#111810'
				emoji = '🤮'
				break
			default:
				color = 'gray'
		}
		return { ...rating, color, emoji }
	})
	return sortedRatingsWithColor
}
