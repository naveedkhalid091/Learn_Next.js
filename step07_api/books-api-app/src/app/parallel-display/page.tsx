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
export default async function ParallelDisplay() {
  const fictionBooks = getFictionBooks();
  const nonfictionBooks = getNonFictionBooks();

  /* Promise.all function written below will return 
  all the results parallel to each other, 
  you can hover over the `.all` to read the instruction as well 
   
  */
  const [fiction, Nonfiction] = await Promise.all([
    fictionBooks,
    nonfictionBooks,
  ]);

  return (
    <div>
      <h1>Fiction Books</h1>
      <ul>
        {fiction.map((fbook: Book) => (
          <li key={fbook.id}>{fbook.name}</li>
        ))}
      </ul>

      <h1>Non-Fiction Books</h1>
      {Nonfiction.map((nfbook: Book) => (
        <li key={nfbook.id}>{nfbook.name}</li>
      ))}
    </div>
  );
}
