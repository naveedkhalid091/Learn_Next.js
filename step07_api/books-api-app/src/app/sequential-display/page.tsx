async function getFictionBooks() {
  const response = await fetch(
    "https://simple-books-api.glitch.me/books?type=fiction",
    { cache: "no-store" }
  );
  const data = response.json();
  return data;
}

async function getNonFictionBooks() {
  const response = await fetch(
    "https://simple-books-api.glitch.me/books?type=non-fiction",
    { cache: "no-store" }
  );
  const data = response.json();
  return data;
}

type Book = {
  id: number;
  name: string;
  type: string;
};

export default async function SquentialDisplay() {
  const fictionBooks = await getFictionBooks();
  const nonfictionBooks = await getNonFictionBooks();
  return (
    <div>
      <h1>Fiction Books</h1>
      <ul>
        {fictionBooks.map((fbook: Book) => (
          <li key={fbook.id}>{fbook.name}</li>
        ))}
      </ul>

      <h1>Non-Fiction Books</h1>
      {nonfictionBooks.map((nfbook: Book) => (
        <li key={nfbook.id}>{nfbook.name}</li>
      ))}
    </div>
  );
}
