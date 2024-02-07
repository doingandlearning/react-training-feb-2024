import React from "react";
import "./App.css";

function App() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [error, setError] = React.useState({});

  async function handleSubmit(e) {
    e.preventDefault();

    console.log(name, email, comment);
    // send of to an api
    setError({});
    try {
      // throw Error()
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          body: JSON.stringify({
            name,
            email,
            comment,
          }),
        }
      );

      const data = await response.json();
      console.log(data);

      // navigate("/thank-you")
    } catch (error) {
      // error.name 
      // error.email
      // error.comment
      setError({ name: { message: "Something went wrong" } });
    }
  }
  return (
    <>
      <h1>Contact Form</h1>
      {/* {error && <p>{error}</p>} */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            className={`${error.name?.message ? "field-error" : ""}`}
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {error.name && <p>{error?.name?.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error.email && <p>{error.email.message}</p>}
        </div>
        <div>
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          {error.comment && <p>{error.comment.message}</p>}
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
