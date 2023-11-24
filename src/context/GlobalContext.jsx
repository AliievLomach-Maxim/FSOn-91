import { createContext, useContext, useState } from 'react'

export const GlobalContext = createContext()
export const GlobalContext2 = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const GlobalContextProvider = ({ children }) => {
	const [counter1, setCounter1] = useState(0)

	return (
		<GlobalContext.Provider value={{ counter1, setCounter1 }}>
			<GlobalContext2.Provider value={100000}>
				{children}
			</GlobalContext2.Provider>
		</GlobalContext.Provider>
	)
}

export default GlobalContextProvider
