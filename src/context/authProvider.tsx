import React, { createContext, useEffect, useState } from 'react'
import { ApiHander } from '../fireBase/fireBase.config'
import { IGame, IGameDetails, IUser, TUserField } from '../interfaces/games.interface'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import fetchList from '../services/fetch-game-list'

interface IAuthContext {
	test: string
	user: IUser | null
	addToList: (gameId: IGame, field: TUserField) => void
	removeFromList: (gameId: IGame, field: TUserField) => void
	wishList: IGame[]
	cartList: IGame[]
	loadingUser: boolean
}

export const authContext = createContext<IAuthContext>({} as IAuthContext)

interface IProps {
	children: React.ReactNode
}
const AuthProvider = ({ children }: IProps) => {
	const [test, settest] = useState('hello')
	const [user, setUser] = useState<IUser | null>(null)
	const [wishList, setWishList] = useState<IGame[]>([])
	const [cartList, setCartList] = useState<IGame[]>([])
	const [loadingUser, setLoadingUser] = useState(false)

	const removeFromList = async (gameDetails: IGame, field: TUserField) => {
		if (!user) return
		if (field === 'wishList') {
			console.log('removing from wish list')

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

	const addToList = async (gameDetails: IGame, field: TUserField) => {
		if (!user) return
		if (field === 'wishList') {
			setWishList([gameDetails, ...wishList])
		} else {
			setCartList([gameDetails, ...cartList])
		}
		ApiHander.addToList(user.docId!, gameDetails.id.toString(), field)
	}

	// TODO - MAKE SETLOADING USER = FALSE IN ONE PLACE AFTER ALL IS ENDED NOT IN MULTIPLE PLACES (MAYBE CREATE A NEW PROMISE AND PROMISE ALL)
	// fetch details of games id's[]
	const fetchGameList = async (user: IUser) => {
		if (!user.wishList.length) return setLoadingUser(false)
		const res = await fetchList(user.wishList)
		if (!res) {
			setLoadingUser(false)
			return console.log('eroror')
		}

		setWishList(res)
		// setLoadingUser(false)
	}

	// Fetch details of cart id's []
	const fetchCartList = async (user: IUser) => {
		if (!user.cartList.length) return setLoadingUser(false)

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
