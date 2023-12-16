import React, { createContext, useEffect, useState } from 'react'

interface IAuthContext {
	test: string
}

export const authContext = createContext<IAuthContext>({} as IAuthContext)

interface IProps {
	children: React.ReactNode
}
const AuthProvider = ({ children }: IProps) => {
	const [test, settest] = useState('hello')

	return <authContext.Provider value={{ test }}>{children}</authContext.Provider>
}

export default AuthProvider
