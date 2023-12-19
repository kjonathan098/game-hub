import React, { createContext, useEffect, useState } from 'react'
import { ApiHander } from '../fireBase/fireBase.config'
import { IGameDetails, IUser, TUserField } from '../interfaces/games.interface'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import fetchList from '../services/fetch-game-list'

interface IAuthContext {
	test: string
	user: IUser | null
	addToList: (gameId: IGameDetails, field: TUserField) => void
	removeFromList: (gameId: IGameDetails, field: TUserField) => void
	wishList: IGameDetails[]
	cartList: IGameDetails[]
	loadingUser: boolean
}

export const authContext = createContext<IAuthContext>({} as IAuthContext)

interface IProps {
	children: React.ReactNode
}
const AuthProvider = ({ children }: IProps) => {
	const [test, settest] = useState('hello')
	const [user, setUser] = useState<IUser | null>(null)
	const [wishList, setWishList] = useState<IGameDetails[]>([])
	const [cartList, setCartList] = useState<IGameDetails[]>([])
	const [loadingUser, setLoadingUser] = useState(false)

	const removeFromList = async (gameDetails: IGameDetails, field: TUserField) => {
		if (!user) return
		if (field === 'wishList') {
			const newWishList = wishList.filter((item) => {
				return item.id !== gameDetails.id
			})
			setWishList(newWishList)
		} else {
			const newCartList = cartList.filter((item) => {
				return item.id !== gameDetails.id
			})
			setCartList(newCartList)
		}
		ApiHander.removeFromList(user.docId!, gameDetails.id.toString(), field)
	}

	const addToList = async (gameDetails: IGameDetails, field: TUserField) => {
		if (!user) return
		if (field === 'wishList') {
			setWishList([gameDetails, ...wishList])
		} else {
			setCartList([gameDetails, ...cartList])
		}
		ApiHander.addToList(user.docId!, gameDetails.id.toString(), field)
	}

	// fetch details of games id's[]
	const fetchGameList = async (user: IUser) => {
		if (!user.wishList.length) return
		const res = await fetchList(user.wishList)
		if (!res) {
			setLoadingUser(false)
			return console.log('eroror')
		}

		setWishList(res)
		setLoadingUser(false)
	}

	// Fetch details of cart id's []
	const fetchCartList = async (user: IUser) => {
		if (!user.cartList.length) return

		const res = await fetchList(user.cartList)
		console.log(res, 'res')
		if (!res) {
			setLoadingUser(false)
			return console.log('eroror')
		}
		setCartList(res)
		setLoadingUser(false)
	}

	// add user to DB
	const addUser = async (user: IUser) => {
		const res = await ApiHander.addUser(user)
		if (!res) return console.log('fire error toast')
		setUser(res)
		setLoadingUser(false)
	}

	// check if user exist in DB
	const getUsers = async (user: IUser) => {
		const res = await ApiHander.getUser(user.uid)
		if (!res) {
			addUser(user)
		} else {
			fetchGameList(res)
			fetchCartList(res)
			setUser(res)
		}
	}

	useEffect(() => {
		setLoadingUser(true)
		const auth = getAuth()
		const unsubscribe = onAuthStateChanged(auth, (res) => {
			if (res) {
				const user: IUser = { displayName: res.displayName!, photoURL: res.photoURL!, uid: res.uid, wishList: [], cartList: [] }

				setUser(user)
				getUsers(user)
			} else {
				setUser(null)
				setWishList([])
				setCartList([])
				setLoadingUser(false)
			}
		})

		// Clean up subscription on unmount
		return () => unsubscribe()
	}, [])

	return <authContext.Provider value={{ test, user, addToList, wishList, cartList, loadingUser, removeFromList }}>{children}</authContext.Provider>
}

export default AuthProvider
