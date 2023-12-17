import React, { createContext, useEffect, useState } from 'react'
import { ApiHander } from '../fireBase/fireBase.config'
import { IUser } from '../interfaces/games.interface'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

interface IAuthContext {
	test: string
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

	useEffect(() => {
		const auth = getAuth()
		const unsubscribe = onAuthStateChanged(auth, (res) => {
			if (res) {
				const user: IUser = { displayName: res.displayName!, photoURL: res.photoURL!, uid: res.uid }
				getUsers(user)
			} else {
				setUser(null)
			}
		})

		// Clean up subscription on unmount
		return () => unsubscribe()
	}, [])

	return <authContext.Provider value={{ test, user }}>{children}</authContext.Provider>
}

export default AuthProvider
