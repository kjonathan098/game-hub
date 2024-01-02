import fifaBkg from '../../assets/HomePageCarouselPromo/fifa24.avif'
import alanWake from '../../assets/HomePageCarouselPromo/alanWake.avif'
import lotr from '../../assets/HomePageCarouselPromo/lotr.avif'
import assasins from '../../assets/HomePageCarouselPromo/mirage.avif'
import deadIsland from '../../assets/HomePageCarouselPromo/deadIsland.avif'
import fifaTittle from '../../assets/HomePageCarouselPromo/fifa_title.png'
import alanWakeTitle from '../../assets/HomePageCarouselPromo/ala_wake_title.png'
import deadIslanTittle from '../../assets/HomePageCarouselPromo/dead_island_title.png'
import lotrTittle from '../../assets/HomePageCarouselPromo/lotr_title.png'
import assasinTittle from '../../assets/HomePageCarouselPromo/assasin_creed_title.png'

export const bannerMedia = [
	{
		name: 'Alan Wake 2',
		titleLogo: alanWakeTitle,
		background: alanWake,
		rawgId: 580972,
		description: 'Buy Alan Wake 2 and get Alan Wake Remastered, our gift to you. Offer ends January 10, 2024, see page for details.',
	},
	{
		name: 'fifa 24',
		titleLogo: fifaTittle,
		background: fifaBkg,
		rawgId: 963218,
		description: 'EA SPORTS FC™ 24 welcomes you to The World’s Game: the most true-to-football experience ever.',
	},
	{
		name: 'Lotr',
		titleLogo: lotrTittle,
		background: lotr,
		rawgId: 865101,
		description: 'Adventure alone or band together on a quest to reclaim the ancient Kingdom of Moria.',
	},
	{
		name: 'Assasins Creed',
		titleLogo: assasinTittle,
		background: assasins,
		rawgId: 845261,
		description: 'Experience the story of Basim, a cunning thief seeking answers and justice as he navigates the streets of ninth-century Baghdad.',
	},
	{
		name: 'Dead Island',
		titleLogo: deadIslanTittle,
		background: deadIsland,
		rawgId: 845261,
		description: 'Uncover the truth behind the outbreak and discover who or what you are.',
	},
] as const
