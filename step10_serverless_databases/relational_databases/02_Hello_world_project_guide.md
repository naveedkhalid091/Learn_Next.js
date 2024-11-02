## Connect Database with your local account:

#### Step 1. Connect with your project:

You need to follow below sub-steps to connect your project into vercel database:

i). Login into your `vercel` account .

ii). Go to the storage section and click on the `create` button infront of the `Postgres`. Becasue we will be doing the postgres in future. 3. Write Name of your database. 4. Now you need to connect your storage with your local project. 5. Scroll down the page and click on the `Connect Project` button if you have already deployed your project to the vercel but if you haven't deployed your project then your project will not show inside the drop down manu so you need to run the CLI command `vecel link` into your project directory and answer the requested questions from the vercel.

iii) Now if you will click on the `Connect Project` button from the vercel you will see your linked project name. Click on the linked project and connect your project successfully with your database.

Note: You must ensure that you are login with the vercel account through `vercel login` command first before connecting with the database.
You will finally receive a successful notice on the terminal of your database connectivity

Note that your database is now connected without your project deployment and also note that above connectivity method is only for vercel database. You will need to follow different guidlines for different databases.

#### Step-2: Pull your latest environment variables.

This step is mentioned inside the vecel database and command is also mentioned there .

I have also written the command here as below:

`vercel env pull .env.development.local`

#### Step 3: Install vercel package:

Then run `npm install @vercel/postgres` or `pnpm add @vercel/postgres` to install the Vercel Postgres SDK.

#### Create users table inside the vercel as per the below syntax: Note that this is on sample basis, we will learn each and evey command later on.

    CREATE TABLE Users (
        UserID SERIAL PRIMARY KEY,               -- Automatically increments UserID
        Email VARCHAR(255) NOT NULL UNIQUE,      -- Email must be unique and not null
        Password VARCHAR(255) NOT NULL,          -- Password field, typically hashed
        Role VARCHAR(50) NOT NULL                -- Role (e.g., 'admin', 'user', etc.)
    );

Now create a sample users data:

    INSERT INTO Users (Email, Password, Role)
    VALUES ('john.doe@example.com', 'hashedpassword123', 'user');

Now use the below code on sample basis to check if data is being fetched from database?

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

Note: You can use any database Neon,AWS Vercel etc at the same time because all support the same syntax of SQL.

Lastly, the above table and users data can be added manually by clicking on the `data` button and then click on the `Query` to write the code and click on `Run Query`:

After successfull data query run, you can visit/go to the `browse` section and click on the created header table to see the data.

Note: In future lectures we will be adding data from drizzle and will use the NEON database because NEON offers us the large volume of free data as compared to Vercel.
