import axios from 'axios'

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: { key: '4f125506b6604b8a83e4deeb10165775' },
})
