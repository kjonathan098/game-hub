import { Box } from '@chakra-ui/react'
import React from 'react'

const BlendedImage = ({ img }: { img: string }) => {
	return (
		<Box position={'absolute'} top={0} w={'100%'} h={'100%'}>
			<Box bgImage={` url(${img})`} bgPosition="center" bgRepeat="no-repeat" bgSize="cover" zIndex={1} h={'100%'}>
				<RadialBg />
				<Box height="100%" width="100%" bg={'rgba(16, 16, 16, 1)'} opacity={0.5} />
			</Box>
		</Box>
	)
}

export default BlendedImage

function RadialBg() {
	const radialBg = `radial-gradient(ellipse at center, rgba(16, 16, 16, 0) 0%, rgba(16, 16, 16, 1) 70%)`

	return <Box height="100%" position="absolute" width="100%" top={0} bg={radialBg} />
}
