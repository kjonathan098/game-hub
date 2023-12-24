import { Box, Center, Image, Stack } from '@chakra-ui/react'
// import GTABanner from '../../assets/gta.png'
// import GtaBG from '../../assets/gtabg.jpeg'
import banner from '../../assets/ps4Banner.webp'

const HeroBanner = () => {
	return (
		<Box p={2} display={'flex'} justifyContent={'center'} minH={'300px'}>
			<Stack w={'90%'} justify="flex-end">
				<Stack w={'90%'} justify="flex-end" position={'relative'}>
					{/* <Image src={banner} alt="gamme banner photo" h={'400px'} objectFit={'cover'} position={'absolute'} style={{ filter: 'blur(10px)' }} zIndex={-1} /> */}
					<Image src={banner} alt="gamme banner photo" h={'300px'} objectFit={'cover'} />
				</Stack>
			</Stack>
		</Box>
	)
}

export default HeroBanner

{
	/* <Center h={'220px'} rounded="lg" style={{ backgroundImage: `url(${GtaBG})`, backgroundSize: 'cover' }}>
<Image src={GTABanner} alt="gamme banner photo" h={'300px'} mt={'-75px'} />
</Center> */
}
