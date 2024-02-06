
export interface IItem {
	id: string;
	name: string;
	price: string;
	image: string;
}


export interface IAction {
	type: 'ADD_ITEM' | 'REMOVE_ITEM' | 'CLEAR_CART',
	payload?: Partial<IItem>
}

export const cartReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			return {
				...state,
				items: [...state.items, action.payload]
			}
		case 'REMOVE_ITEM':
			return {
				...state,
				items: state.items.filter(item => item.id !== action.payload!.id)
			}
		case 'CLEAR_CART':
			return { ...state, items: [] }
		default:
			return state
	}
}