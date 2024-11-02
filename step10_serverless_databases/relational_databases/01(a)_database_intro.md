## Databases:

A database is a place to store data. To interact with a database, we need a language. There are two main types of languages for working with databases:

i)`SQL Languages`: We use these languages (like PostgreSQL, MySQL, ORACLE, SAP) when our data is relational (data that can be linked together).

ii) `NoSQL Languages`: We use these languages (like MongoDB Query Language, MQL) when our data is non-relational (data that cannot be linked easily).

We will learn more about SQL and NoSQL later, but lets discuss the types of data we can hold.

## Types of data storage:

We have two types of data storage:

#### i) Relational:

This type of data can be linked with other data, and it's typically organized/stored in tables form. For example, in an e-commerce site with `customers`, `products`, and `vendors` tables, each product is linked to a customer and a vendor. `SQL languages` are usually preferred for this setup because they handle these connections efficiently, although `NoSQL` can be used as well, though with fewer relational features.

#### ii) Non Relational data types:

This data is harder to link directly and is usually stored in an `object-like form`. For non-relational data, `NoSQL languages`, like MongoDB’s MQL, are more efficient. MongoDB is versatile and provides tools for both `local hosting` (using MongoDB Compass or Robo 3T for visualization) and `cloud-based storage` through MongoDB Atlas. MQL (MongoDB Query Language) allows CRUD (Create, Read, Update, Delete) operations and is used consistently across both local and cloud setups.

## Platforms of storing data:

1. Local Storage:
   You can store data locally by making your own laptop as a server but it depends on which query language you are working with.

   - If your data type is `relational` and you also choose `PostgreSQL` language to interect with your databases then for `local sever setup` you need to install `pgAdmin` tool.

   - If your data type is `non-relational` and you also choose `MQL` language to interact with your database then for `local server setup` you need to install `MongoDB Compass` or `Robo 3T` tools.

Moreover, There are two ways to connect to a local server. One method uses `Docker`, which organizes applications into containers. This helps keep everything needed for the app in one place, making it easier to run anywhere. The other method connects directly through `PageAdmin`, which is a web interface that allows you to manage the server without using containers.

#### Note: Local storage is more suitable to setup for development and testing.

2. Cloud Storage:
   You can also store your data into the cloud database, e.g. NEON, SUPABASE, AWS, ORACLE, SAP HANA, Azure, Google cloud etc.

   Storing your data on cloud enable you to enjoy many benefits including high availability, scalability, disaster recovery, and cost-effectiveness, any many more which we will discuss later on.

#### Note: cloud storage is often preferred for production environments due to its scalability and accessibility.
