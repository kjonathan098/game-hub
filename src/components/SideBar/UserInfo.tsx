import { useContext } from 'react'
import { authContext } from '../../context/authProvider'
import LoginOptions from './LoginOptions'
import UserOptions from './UserOptions'

const UserInfo = () => {
	const { user } = useContext(authContext)
	return <>{user ? <UserOptions /> : <LoginOptions />}</>
}

export default UserInfo
