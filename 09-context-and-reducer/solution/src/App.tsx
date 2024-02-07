import React from "react"
import { faker } from "@faker-js/faker"

import Table from "./components/Table";
import ItemsList from "./components/ItemsList";
import LikePanel from "./components/LikePanel";

import Book from "./book";
import Film from "./film";
import "./App.css";
import { ILibraryContext, LibraryContext } from "./contexts/LibraryContext";


function App() {
  const { state, dispatch } = React.useContext(LibraryContext) as ILibraryContext
  const { books, films } = state
  const [tabularFormat, setTabularFormat] = React.useState<null | boolean>(null);
  const addBook = (title: string, author: string) => {
    dispatch({ type: 'ADD_BOOK', payload: new Book(title, author) });
  };


  // Function to add a film
  const addFilm = (name: string, genre: string, blurb: string) => {
    dispatch({ type: 'ADD_FILM', payload: new Film(name, genre, blurb) });
  };


  React.useEffect(() => {
    if (tabularFormat === null) return;
    window.localStorage.tabularFormatPreference = tabularFormat;
    console.log(
      `Written tabularFormatPreference=${tabularFormat} to local storage`
    );
  }, [tabularFormat]);

  React.useEffect(() => {
    if (tabularFormat === null) {
      const storedValue = window.localStorage.tabularFormatPreference;

      // Convert the retrieved value to a boolean
      const tabularFormatPreference = storedValue === "true";

      console.log(
        `Read tabularFormatPreference=${tabularFormatPreference} from local storage`
      );
      setTabularFormat(tabularFormatPreference);
    }
  }, []);

  function toggleView() {
    setTabularFormat(!tabularFormat);
  }

  return (
    <>
      <h1>My Library</h1>
      <button onClick={toggleView}>
        {tabularFormat ? "Show as List" : "Show as Table"}
      </button>
      <button onClick={() => addBook(faker.commerce.productName(), faker.person.fullName())}>Add book</button>
      <button onClick={() => addFilm(faker.commerce.productName(), faker.music.genre(), faker.commerce.productDescription())}>Add film</button>
      {tabularFormat === true ? (
        <div>
          <h2>Books</h2>
          <Table items={books} />
          <h2>Films</h2>
          <Table items={films} />
        </div>
      ) : (
        <div>
          <h2>Books</h2>
          <ItemsList items={books} />
          <h2>Films</h2>
          <ItemsList items={films} />
        </div>
      )}
      <LikePanel />
    </>
  );
}

export default App;
