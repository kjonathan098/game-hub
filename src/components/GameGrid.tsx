import useGames from '../hooks/useGames'

const GameGrid = () => {
	const { games, error } = useGames()

	return (
		<>
			{error && <li>{error}</li>}
			<ul>
				{games.map((game) => {
					return <li key={game.id}>{game.name}</li>
				})}
			</ul>
		</>
	)
}

export default GameGrid
