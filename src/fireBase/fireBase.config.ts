// Import the functions you need from the SDKs you need
import { IUser } from '../interfaces/games.interface'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { collection, getDocs, where, query, doc, setDoc } from 'firebase/firestore'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

interface IAPIHandler {
	googleAuth: () => Promise<IUser | null>
	getUser: (id: string) => Promise<IUser | null>
	addUser: (user: IUser) => Promise<boolean>
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

		try {
			const res = await signInWithPopup(auth, provider)
			const user: IUser = { displayName: res.user.displayName!, photoURL: res.user.photoURL!, uid: res.user.uid }
			return user
		} catch (error) {
			return null
		}
	},
	getUser: async (id) => {
		const q = query(userCollection, where('uid', '==', id))
		const querySnapshot = await getDocs(q)
		const user = querySnapshot.docs.map((doc) => doc.data())

		if (!user.length) return null

		return { ...user[0] } as IUser
	},
	addUser: async (user) => {
		try {
			await setDoc(doc(userCollection), user)
			return true
		} catch (error) {
			console.log('error adding user to DB')
			return false
		}
	},
}
