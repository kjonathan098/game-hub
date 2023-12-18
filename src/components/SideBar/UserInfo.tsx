import { useContext } from 'react'
import { authContext } from '../../context/authProvider'
import LoginOptions from './LoginOptions'
import UserOptions from './UserOptions'
import { Skeleton, Stack } from '@chakra-ui/react'

const UserInfo = () => {
	const { user, loadingUser } = useContext(authContext)

	if (loadingUser) {
		return (
			<Stack>
				{[1, 2, 3, 4, 5].map((item) => (
					<Skeleton height="30px" key={item} />
				))}
			</Stack>
		)
	}
	return <>{user ? <UserOptions /> : <LoginOptions />}</>
}

export default UserInfo
