## Integration of Drizzle with Supabase:

## The Basic file structure:

Below is the basic file structure of the project. In the src/db directory,
we have `table definition` in `schema.ts`.

In `drizzle folder` there are `sql migration file` and `snapshots`.

📦 <project root>
├ 📂 drizzle
├ 📂 src
│ ├ 📂 db
│ │ └ 📜 schema.ts
│ └ 📜 index.ts
├ 📜 .env
├ 📜 drizzle.config.ts
├ 📜 package.json
└ 📜 tsconfig.json

###### 1). SQL migration files: The term `migration files` is derived from the concept of "migrating" a database schema from `one state to another`. When you make changes to the structure of your database (like adding or modifying tables), you're effectively migrating from an old schema to a new one.

###### 2). SnapShots: Snapshots are essentially `saved states` of your database schema at specific points in time. Snapshots capture the complete state of your database schema at a given moment. This includes all tables, columns, relationships, and any other schema-related configurations.

#### Note: The above folder structure is not mandatory, you can define your own structure.

## Step # 1 - Install Packages:

pnpm add drizzle-orm postgres dotenv
pnpm add -D drizzle-kit tsx

Go to the official drizzle website if you wanted to know the npm or yard commands.

## Step # 2(a) - Setup connection variables:

Create a `.env` file in the root of your project and add your database connection variable:

     DATABASE_URL=

#### Step-2(b): Sign in to your database:

In our case we will be using the `SupaBase` database,
i) Create your account
ii) Sign-in to your account
iii) Create your project on database.
iv) Go to the project settings.
v) In the project settings, click on the `database` available under the `configurations`.
vi) Copy the url and paste into the `.env` file written same as step-2(a).

Here the step-2 is completed.

## Step 3 - Connect Drizzle ORM to the database

Create a index.ts file in the src/db directory and initialize the connection and write the below code:

        import { drizzle } from "drizzle-orm/postgres-js";
        import postgres from "postgres";

        const connectingString = process.env.DATABASE_URL;

        // Disable prefetch as it is not supported for "Transaction" pool mode

        export const client = postgres(connectingString as string, {
        prepare: false,
        });
        export const db = drizzle({ client });

###### Note: Please note that if you will copy the code from the official website from step 3 and paste it, as it is, then you will face a typeScript error, When you will mention `as string` after the `process.env.DATABASE_URL` same as above then error will be removed.

Now here you have sucsessfully connected your supabase database with your project.

After the connectivity you can now create table in your database, further step of creating table is given below:

## Step 4 - Create a table:

Create your schema folder inside the `src/db` directory and define your all schema files based on your need.

For Example: If you wnated to create a user table then create `user.ts` file inside the `src/db/schema` and write the following code:

        import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

        export const usersTable = pgTable("users", {
        id: integer().primaryKey().notNul().generatedAlwaysAsIdentity(),
        name: varchar({ length: 255 }).notNull(),
        age: integer().notNull(),
        email: varchar({ length: 255 }).notNull().unique(),
        });

## Step 5 - Create a `drizzle.config.ts` file:

Create a `drizle.config` file into the root of your project and add the following content.

        import 'dotenv/config';
        import { defineConfig } from 'drizzle-kit';

        export default defineConfig({
        out: './drizzle',
        schema: './src/db/schema.ts',
        dialect: 'postgresql',
        dbCredentials: {
        url: process.env.DATABASE_URL!,
        },
        });

##### Note: Don't forget to change the route of schema file if it is different from the above path. in the current learning repository the current path is `schema: './src/db/schema/users.ts' `, If you have defined multiple schemas in your project then you can put schemas' routes into an array like:

#### schema:['./src/db/schema.ts,'./src/db/users.ts, ./src/db/info.ts,]

However, for your inforamtion, a `Drizzle config` is a file used by the `Drizzle Kit` and contains all the information about your database connection, migration folder and schema files.

Step 6 : Apply Changes to the database:

Applying changes to the databases is called migrations so you need the following command to push the migrations into your databases:

       `drizzle-kit push`

Alternatively, you can generate migrations using the drizzle-kit generate command and then apply them using the drizzle-kit migrate command:

Generate migrations:

     npx drizzle-kit generate

Apply migrations:

     npx drizzle-kit migrate

Note: If you need to change the schema then first you need to generate the migrations and then apply migrations secondly.
Above commands with first check the connectivity, if database is connected then changes will be applied.

When you give above commands into your terminal then the created table at step 4 pushed to the database and Drizzle folder is automatically created in your prtoject where all the migrations are recorded, every migration file is seperately generated.

Now, your database is connected and you can add client's information using the signup process and link your submit button with your database table or content addition.

##### Note: You are advised to use the `react-hot-toast` library for setting the notifications of sign-in or sing-up forms.
