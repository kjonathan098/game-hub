import React, { createContext, useEffect, useState } from 'react'
import { ApiHander } from '../fireBase/fireBase.config'
import { IGameDetails, IUser } from '../interfaces/games.interface'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import fetchList from '../services/fetch-game-list'

interface IAuthContext {
	test: string
	user: IUser | null
	addToWishList: (gameId: IGameDetails) => void
	wishList: IGameDetails[]
}

export const authContext = createContext<IAuthContext>({} as IAuthContext)

interface IProps {
	children: React.ReactNode
}
const AuthProvider = ({ children }: IProps) => {
	const [test, settest] = useState('hello')
	const [user, setUser] = useState<IUser | null>(null)
	const [wishList, setWishList] = useState<IGameDetails[]>([])
	const [loading, setLoading] = useState(false)

	const addToWishList = async (gameDetails: IGameDetails) => {
		if (!user) return

		ApiHander.addToWishList(user.docId!, gameDetails.id.toString())
		// const newWishList = [...user?.wishList!, gameIDString]
		setWishList([gameDetails, ...wishList])
	}

	// fetch details of games id's[]
	const fetchGameList = async (user: IUser) => {
		if (!user.wishList.length) return
		const res = await fetchList(user)
		if (!res) {
			setLoading(false)
			return console.log('eroror')
		}
		setWishList(res)
		setLoading(false)
	}

	// add user to DB
	// ISSUE 1 .. NEED TO RETRIEVE USER DOC ID AND ADDED IT TO USER OBJ
	const addUser = async (user: IUser) => {
		const res = await ApiHander.addUser(user)

		if (!res) return console.log('fire error toast')
		setUser(res)
		setLoading(false)
	}

	// check if user exist in DB
	const getUsers = async (user: IUser) => {
		const res = await ApiHander.getUser(user.uid)

		if (!res) {
			addUser(user)
		} else {
			fetchGameList(res)
			setUser(res)
		}
	}

	useEffect(() => {
		setLoading(true)
		const auth = getAuth()
		const unsubscribe = onAuthStateChanged(auth, (res) => {
			if (res) {
				const user: IUser = { displayName: res.displayName!, photoURL: res.photoURL!, uid: res.uid, wishList: [], cart: [] }

				setUser(user)
				getUsers(user)
			} else {
				setUser(null)
				setWishList([])
				setLoading(false)
			}
		})

		// Clean up subscription on unmount
		return () => unsubscribe()
	}, [])

	return <authContext.Provider value={{ test, user, addToWishList, wishList }}>{children}</authContext.Provider>
}

export default AuthProvider
