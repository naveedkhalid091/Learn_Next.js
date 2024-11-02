/* Below is the code straight away taken from the vercel storage 
but with only change is that I have removed the params and wrote `SELECT * from Users` 
because I have created sample user on my database.
and finally I added below to render data from the database: 

<div>Email:{row.email}</div>
<div>Password:{row.password}</div>
<div>Role:{row.role}</div>
*/
import { sql } from "@vercel/postgres";

export default async function Cart(): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from Users`;
  console.log("Rows", rows);
  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.quantity}
          <div>Email:{row.email}</div>
          <div>Password:{row.password}</div>
          <div>Role:{row.role}</div>
        </div>
      ))}
    </div>
  );
}
