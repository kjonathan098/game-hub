import React, { createContext, useEffect, useState } from 'react'
import { ApiHander } from '../fireBase/fireBase.config'
import { IGameDetails, IUser } from '../interfaces/games.interface'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import fetchList from '../services/fetch-game-list'

interface IAuthContext {
	test: string
	user: IUser | null
	addToWishList: (gameId: IGameDetails) => void
	removeFromWishList: (gameId: IGameDetails) => void
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

	const removeFromWishList = async (gameDetails: IGameDetails) => {
		if (!user) return
		const newWishList = wishList.filter((item) => {
			return item.id !== gameDetails.id
		})
		setWishList(newWishList)
		ApiHander.removeFromWishList(user.docId!, gameDetails.id.toString())
	}

	const addToWishList = async (gameDetails: IGameDetails) => {
		if (!user) return
		setWishList([gameDetails, ...wishList])
		ApiHander.addToWishList(user.docId!, gameDetails.id.toString())
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
		if (!user.cart.length) return
		console.log(user.cart)

		const res = await fetchList(user.cart)
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
				const user: IUser = { displayName: res.displayName!, photoURL: res.photoURL!, uid: res.uid, wishList: [], cart: [] }

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

	return <authContext.Provider value={{ test, user, addToWishList, wishList, cartList, loadingUser, removeFromWishList }}>{children}</authContext.Provider>
}

export default AuthProvider
