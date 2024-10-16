## What is tRPC?

- tRPC stand for typeScript Remote Procedure Call.
- tRPC is a framework for building a typeSafe APIs using typeScripts.
- this framwork ensures that API requests and responses are fully typesafe.

* It allow developers to call the backend functions from the frontend (Remote Procedure call).

##### Q: If we will ensure the `type safty` by writting the schema through Zod into the `lib` folder and then importing the `schema` into an api of form data `i.e. src/api/signup/route.ts` then why I should learn another framefork of tRPC?

A: The reasons you might still want to learn a framework like tRPC, even if you're ensuring type safety with Zod and react-hook-form as given below:

1. `Simplified API Development`: tRPC simplifies the process of creating APIs by Defining your API routes as TypeScript functions directly in your backend code and No separate API file structure needed. while in the Next.js we have to create a folder under `/app/api` and define functions like GET, POST, etc.

2. `Type-safty`: In the next.js you ensure the typeSafty by manually defining the `type` or using the Zod etc but tRPC offers the automatic type inference by ensuring that client and server types always match.

3. `Validation`: In the Next.js validation needs to manually implemented by using the `Zod` and `react-hook-form` but tRPC is already integrated with Zod and other technologies and offers you to define schemas once and use them for both the client and the server side.

4. `Boilerplate Code`: Next.js requires some `boilerplate` for type declarations and data handling, while tRPC Generally has less boilerplate since functions are defined directly and infer types automatically.

Conclusion: If you wanted to work without learning the tRPC framwork then you can surely work but learning this library would help you to write lesser code and will ultimately save your time in future.
