// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { IUser } from '../interfaces/games.interface'

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

interface IAPIHandler {
	getUser: (id: string) => Promise<IUser>
}

export const ApiHander: IAPIHandler = {
	getUser: async (id) => {
		const user = await getDocs(collection(db, 'users'))
		console.log(user)
		return { name: 'john', id: 'des' }
	},
}
