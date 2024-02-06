import React from "react"
import { IAction, IItem, cartReducer } from "../reducers/cartReducer"

export interface ICartContext {
	state: CartState,
	dispatch: React.Dispatch<IAction>
}

interface CartState { items: IItem[] }
export const CartContext = React.createContext<ICartContext | null>(null)


const initialState: CartState = {
	items: []
}

export function CartProvider({ children }: { children: React.ReactNode }) {
	const [state, dispatch] = React.useReducer(cartReducer, initialState)
	return <CartContext.Provider value={{ state, dispatch }}>
		{children}
	</CartContext.Provider>
}