import React from "react";

async function GetBooks() {
  const response = await fetch("https://simple-books-api.glitch.me/books");
  const data = await response.json();
  return data;
}

type Book = {
  id: number;
  name: string;
  type: string;
  available: boolean;
};

async function StaticPage() {
  const books = await GetBooks();
  console.log(books);

  return (
    <div>
      <h1>Static page</h1>
      <ul>
        {books.map((book: Book) => (
          <li key={book.id}>
            Sr #: {book.id}
            <br />
            <h1 className="p-2">Book Name:{book.name}</h1>
            <h6 className="p-2">Book Type:{book.type}</h6>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StaticPage;
