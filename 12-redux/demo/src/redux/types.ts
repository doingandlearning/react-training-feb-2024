export const enum ActionType {
  ADD_PRODUCT = "ADD",
  LIKE_PRODUCT = "LIKE",
  REMOVE_PRODUCT = "REMOVE",
  SORT_PRODUCTS = "SORT",
}

export interface Action {
  type: ActionType;
  payload: unknown;
}

export const enum SortedBy {
  DESCRIPTION,
  PRICE,
  LIKES,
}

export interface Product {
  id: number;
  description: string;
  price: number;
  likes: number;
  mostRecentLike?: Date;
}
