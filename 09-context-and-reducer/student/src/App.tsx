import React from "react"
import Table from "./components/Table";
import ItemsList from "./components/ItemsList";
import LikePanel from "./components/LikePanel";

import Book from "./book";
import Film from "./film";
import "./App.css";


function App() {
  const books = [
    new Book("Millennium", "Stieg Larsson"),
    new Book("A Christmas Carol", "Charles Dickens"),
    new Book("The Son", "Jo Nesbo"),
  ];

  const films = [
    new Film("Airplane", "Comedy", "Classic plane spoof"),
    new Film("Skyfall", "Adventure", "Bond spy yarn"),
    new Film("Love Actually", "RomCom", " Hugh Grant playing Hugh Grant"),
    new Film("Mission Impossible", "Adventure", " Hi-octane stunt fest"),
  ];
  const [tabularFormat, setTabularFormat] = React.useState<null | boolean>(null);

  React.useEffect(() => {
    if (tabularFormat === null) return;
    window.localStorage.tabularFormatPreference = tabularFormat;
    console.log(
      `Written tabularFormatPreference=${tabularFormat} to local storage`
    );
  }, [tabularFormat]);

  React.useEffect(() => {
    if (tabularFormat === null) {
      let storedValue = window.localStorage.tabularFormatPreference;

      // Convert the retrieved value to a boolean
      let tabularFormatPreference = storedValue === "true";

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
