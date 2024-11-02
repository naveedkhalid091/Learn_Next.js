## What is Drizzle?

Drizzle is an ORM, while an ORM (Object-Relational Mapping) is a way to interact with a database using a programming language (like Python or JavaScript) instead of writing raw SQL queries. ORMs allow you to work with databases in an easier and more intuitive way.

`Drizzle` is an ORM (Object-Relational Mapping) tool that simplifies database operations, especially for TypeScript and PostgreSQL.`It converts your database tables into TypeScript objects and makes writing SQL-like queries easier.`

`Use Case`: You use Drizzle to speed up development by avoiding writing raw SQL, while still interacting with a relational database like PostgreSQL.

#### Core/Main functions of Drizzle ORM:

1.  `Schema defination`: You define your database schema (tables, columns) in a simple and TypeScript-friendly way.
2.  `Inserting Data`: Adding data into your database with type-safe, structured queries.
3.  `Querying Data`: Fetching or retrieving data from your database using clean, type-safe queries.
4.  `Migrations`: Managing changes to your database schema over time (e.g., adding/removing columns or tables).

There are few advance features and capabilities that Drizzle offers, which might come in handy as you advance:

5. Database Relationships: Drizzle allows you to define relationships between tables, such as one-to-many or many-to-many relationships.

However, for basic to intermediate projects, mastering the core functions is enough.

Code of Difining Schema is given as:

#### Schema Defination Code:

    import { mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";
    const users = mysqlTable("users", {
        id: serial("id").primaryKey(),
        name: varchar("name", { length: 255 }),
        phone: varchar("phone", { length: 20 }),
    });

#### Inserting Data Code:

    await db.insert(users).values({
        name: "Ali",
        phone: "123456789"
    });

#### Querying Data Code:

    const result = await db.select().from(users).where(users.name.eq("Ali"));

#### Reasons of learning Drizzle instead of Prisma ORM?

- The Drizzle is open source and free ORM but the prisma is a paid ORM.

- The syntax of Drizzle is near to the raw SQL:

Every ORM has a built-in support of the databases.
