import { UnknownAction } from "redux";
import Film from "../film";
import Book from "../book";

export function libraryReducer(
  state: { films: Film[]; books: Book[] },
  action: UnknownAction
) {
  switch (action.type) {
    case "ADD_BOOK":
      return { ...state, books: [...state.books, action.payload] };
    case "REMOVE_BOOK":
      return {
        ...state,
        books: state.books.filter(
          (book) => book.title !== action.payload.title
        ),
      };
    case "ADD_FILM":
      return [...state, action.payload];
    case "REMOVE_FILM":
      return {
        ...state,
        films: state.films.filter((film) => film.name !== action.payload.name),
      };
    default:
      return state;
  }
}

export function filmReducer(state: Film[] = [], action: UnknownAction) {
  switch (action.type) {
    case "ADD_FILM":
      return [...state, action.payload];
    case "REMOVE_FILM":
      return state.filter((film) => film.name !== action.payload.name);
    default:
      return state;
  }
}

export function bookReducer(state: Book[] = [], action: UnknownAction) {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.payload];
    case "REMOVE_BOOK":
      return state.filter((book) => book.title !== action.payload.title);

    default:
      return state;
  }
}
