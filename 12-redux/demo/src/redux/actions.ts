// Functions that will create an action
// {type, payload}

import { SortedBy } from "./types";
import { ActionType } from "./types";

let id = 1000;

export function addProduct(description: string, price: number) {
  return {
    type: ActionType.ADD_PRODUCT,
    payload: {
      id: id++,
      description: description,
      price: price,
      likes: 0,
      mostRecentLike: null,
    },
  };
}

export function likeProduct(id: number) {
  return {
    type: ActionType.LIKE_PRODUCT,
    payload: id,
  };
}

export function removeProduct(id: number) {
  return {
    type: ActionType.REMOVE_PRODUCT,
    payload: id,
  };
}

export function sortProducts(sortByField: string) {
  const sortedBy =
    sortByField === "description"
      ? SortedBy.DESCRIPTION
      : sortByField === "price"
      ? SortedBy.PRICE
      : SortedBy.LIKES;

  return { type: ActionType.SORT_PRODUCTS, payload: sortedBy };
}
