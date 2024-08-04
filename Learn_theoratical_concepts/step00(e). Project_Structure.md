## Next.js Project Structure

It covers top-level: 
    i) folders
    ii) files
    iii) configuration files 
    iv) routing conventions 
within the app directory. 

## i) Top level Folders: 

Top-level folders are used to organize your application's code and static assets.

e.g. 

`app` = App Router.
`pages` = Pages Router  (We will not study about this).
`public`= Static Assets to be served.
`src` = Optional application source folder.

## ii) Top-Level Files

Top-level files are used to configure your, application, manage dependencies, Run Middleware, integrate monitoring tools, define environment variables

e.g. 

`next.config.js`  = Configuration file for Next.js.
`package.json`    =  Project dependencies and scripts.
`middleware.ts`   = Next.js request middleware
`.env`            = Environment variables
`.env.local`      = .env.local
`.eslintrc.json`  = Configuration file for ESLint. 
`.gitignore`      = Git files and folders to ignore.
`next-env.d.ts`   = TypeScript declaration file for Next.js.
`tsconfig.json`   = Configuration file for TypeScript.
`jsconfig.json`   = Configuration file for JavaScript.


`app Routing Conventions or (Routing standard practices).` 

The following files are used to define routes in the `app` router.

`layout.tsx`       =  Layout
`page.tsx`         =  Page UI
`loading.tsx`      =  Loading UI
`not-found.tsx`    =  Not found UI
`error.tsx`        =  Error UI
`global-error.tsx` =  Global Error UI
`route.tsx`        =  API endpoint 
`template.tsx`     =  Re-rendered layout
`default.tsx`      =  Parallel route fallback page.


## Nested Routes 
	
`folder`        = Route segment
`folder/folder`	= Nested route segment

## Dynamic Routes

[folder]	Dynamic route segment
[...folder]	Catch-all route segment
[[...folder]]	Optional catch-all route segment

## Route Groups and Private Folders

(folder)	= Group routes without affecting routing.
_folder	    = Opt folder and all child segments out of routing.


## Parallel and Intercepted Routes

	
@folder	       =  Named slot
(.)folder      =  Intercept same level
(..)folder	   =  Intercept one level above
(..)(..)folder =  Intercept two levels above
(...)folder	   =  Intercept from root