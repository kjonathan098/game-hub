import { Box, Center, Image, Stack } from '@chakra-ui/react'
import GTABanner from '../../assets/gta.png'
import GtaBG from '../../assets/gtabg.jpeg'

const HeroBanner = () => {
	return (
		<Box p={2} display={'flex'} justifyContent={'center'} minH={'300px'}>
			<Stack w={'90%'} justify="flex-end">
				<Center h={'220px'} rounded="lg" style={{ backgroundImage: `url(${GtaBG})`, backgroundSize: 'cover' }}>
					<Image src={GTABanner} alt="gamme banner photo" h={'300px'} mt={'-75px'} />
				</Center>
			</Stack>
		</Box>
	)
}

export default HeroBanner
