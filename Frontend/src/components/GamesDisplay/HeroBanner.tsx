import { Box, Image, Stack } from '@chakra-ui/react'

import banner from '../../assets/ps4Banner.webp'

const HeroBanner = () => {
	return (
		<Box p={2} display={'flex'} justifyContent={'center'} minH={{ base: 'fit-content', md: '300px' }}>
			<Stack w={'100%'} justify="flex-end">
				<Stack w={'100%'} justify="flex-end" position={'relative'}>
					<Image src={banner} alt="gamme banner photo" h={'300px'} objectFit={'cover'} />
				</Stack>
			</Stack>
		</Box>
	)
}

export default HeroBanner
