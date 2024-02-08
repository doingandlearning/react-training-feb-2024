import { UnknownAction } from "redux";
import { ActionType, Product, SortedBy } from "./types";

export function productsReducer(
  state: Product[] = [],
  action: UnknownAction
): Product[] {
  switch (action.type) {
    case ActionType.ADD_PRODUCT:
      // Ensure that action.payload is of type Product
      return [...state, action.payload as Product];
    case ActionType.LIKE_PRODUCT:
      // Ensure that action.payload is compatible with the logic (e.g., a product ID)
      return state.map((p) =>
        p.id === action.payload
          ? { ...p, likes: p.likes + 1, mostRecentLike: new Date() }
          : p
      );
    case ActionType.REMOVE_PRODUCT:
      // Ensure that action.payload is compatible with the logic (e.g., a product ID)
      return state.filter((p) => p.id !== action.payload);
    default:
      return state;
  }
}

// Ensure sortReducer is correctly typed as well
export function sortReducer(
  state: SortedBy = SortedBy.DESCRIPTION,
  action: UnknownAction
): SortedBy {
  switch (action.type) {
    case ActionType.SORT_PRODUCTS:
      return action.payload as SortedBy;
    default:
      return state;
  }
}
