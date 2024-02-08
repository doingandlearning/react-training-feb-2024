import React from "react";
import { ILibraryContext, LibraryContext } from "../contexts/LibraryContext";
import { faker } from "@faker-js/faker";
import Book from "../book";
import Film from "../film";
import { useDispatch, useSelector } from "react-redux";

interface RootState {
  books: Book[];
  films: Film[];
}

export function useLibrary() {
  const dispatch = useDispatch();

  const addBook = (book: Book) => {
    dispatch({
      type: "ADD_BOOK",
      payload: book,
    });
  };

  const addFilm = (film: Film) => {
    dispatch({
      type: "ADD_FILM",
      payload: film,
    });
  };

  const handleRemove = (item: Book | Film) => {
    if ("title" in item) {
      dispatch({ type: "REMOVE_BOOK", payload: { title: item.title } });
    } else if ("name" in item) {
      dispatch({ type: "REMOVE_FILM", payload: { name: item.name } });
    }
  };

  return { addBook, addFilm, handleRemove };
}
