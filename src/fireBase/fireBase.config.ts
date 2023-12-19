// Import the functions you need from the SDKs you need
import { IUser, TUserField } from '../interfaces/games.interface'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { collection, getDocs, where, query, doc, setDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { useToast } from '@chakra-ui/react'
import useToastMessage from '../hooks/useToast'

interface IAPIHandler {
	googleAuth: () => Promise<void>
	getUser: (id: string) => Promise<IUser | null>
	addUser: (user: IUser) => Promise<IUser | false>
	signOut: () => Promise<void>
	addToList: (userDocId: string, gameId: string, field: TUserField) => Promise<void>
	removeFromList: (userDocId: string, gameId: string, field: TUserField) => Promise<void>
}

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCdL_BNzW9wwNEIunwWX6Iggp9Ao9HqK6s',
	authDomain: 'gamehub-9f705.firebaseapp.com',
	projectId: 'gamehub-9f705',
	storageBucket: 'gamehub-9f705.appspot.com',
	messagingSenderId: '1088718505207',
	appId: '1:1088718505207:web:cff29a3e1c146ad57efff2',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const userCollection = collection(db, 'users')

export const ApiHander: IAPIHandler = {
	googleAuth: async () => {
		const provider = new GoogleAuthProvider()
		const auth = getAuth()
		auth.useDeviceLanguage()

		// auth obeserver will be listening for changes and get res.. no need to return anything. (Maybe handle error)
		try {
			await signInWithPopup(auth, provider)
			console.log('google auth success ')
		} catch (error) {
			console.log('error')
		}
	},
	signOut: async () => {
		const auth = getAuth()
		signOut(auth)
	},
	getUser: async (id) => {
		const q = query(userCollection, where('uid', '==', id))
		const querySnapshot = await getDocs(q)

		let user = querySnapshot.docs.map((doc) => doc.data())
		if (!user.length) return null
		console.log(user[0].cartList, 'user[0].cartList')

		return { ...user[0], wishList: user[0].wishList, cartList: user[0].cartList, docId: querySnapshot.docs[0].id } as IUser
	},
	addUser: async (user) => {
		try {
			const userDocRef = doc(userCollection) // Create a new document reference
			await setDoc(userDocRef, user) // Set the document data

			const newDocId = userDocRef.id // Get the newly
			console.log(newDocId, 'newDocId')

			return { ...user, docId: newDocId } as IUser
		} catch (error) {
			console.log('error adding user to DB')
			return false
		}
	},
	addToList: async (userDocId, gameId, field) => {
		const userDocRef = doc(db, 'users', userDocId)
		try {
			await updateDoc(userDocRef, { [field]: arrayUnion(gameId) })
			console.log('success')
		} catch (error) {
			console.log('error')
			const { errorToast } = useToastMessage()
			errorToast('failed ')
		}
	},
	removeFromList: async (userDocId, gameId, field) => {
		const userDocRef = doc(db, 'users', userDocId)
		try {
			await updateDoc(userDocRef, { [field]: arrayRemove(gameId) })
			console.log('success')
		} catch (error) {
			console.log('error')
		}
	},
}
