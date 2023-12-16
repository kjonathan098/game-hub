import React, { createContext, useEffect, useState } from 'react'
import { ApiHander } from '../fireBase/fireBase.config'
import { IUser } from '../interfaces/games.interface'

interface IAuthContext {
	test: string
	googleSignIn: () => void
	user: IUser | null
}

export const authContext = createContext<IAuthContext>({} as IAuthContext)

interface IProps {
	children: React.ReactNode
}
const AuthProvider = ({ children }: IProps) => {
	const [test, settest] = useState('hello')
	const [user, setUser] = useState<IUser | null>(null)

	const addUser = async (user: IUser) => {
		const res = await ApiHander.addUser(user)
		if (!res) return console.log('fire error toast')
		setUser(user)
	}

	const getUsers = async (user: IUser) => {
		const res = await ApiHander.getUser(user.uid)
		if (!res) {
			addUser(user)
		} else {
			setUser(user)
		}
	}

	const googleSignIn = async () => {
		const res = await ApiHander.googleAuth()
		if (!res) return
		getUsers(res)
	}
	useEffect(() => {}, [])

	return <authContext.Provider value={{ test, googleSignIn, user }}>{children}</authContext.Provider>
}

export default AuthProvider
