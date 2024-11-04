## Next.js Project Initialization and Verification

#### Node Version Check

Ensure your Node version is not later than 18.16.7. Check with:

    node --version

#### Project Setup

To create a new Next.js project, use one of the following commands in your terminal (replace with your project route):

    `npx create-next-app@latest`

    or

    `pnpm create creat-next-app@latest`

Follow the prompts to complete the installation. If you encounter errors, delete the existing project and create a new one.

#### Project Verification

Verify the following components to ensure proper installation:

1. **Project Name:** Check that the folder name matches your project name.
2. **TypeScript:** Ensure tsconfig.json exists in your project.
3. **ESLint:** Check for .eslintrc.json in the src folder.
4. **Tailwind CSS:** Verify the presence of tailwind.config.ts and ensure the following imports are in src/globals.css:
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
5. **src Folder:** Confirm the src folder exists in your project.
6. **App Router:** Expand the src folder to check for the app folder (src/app).
7. **Import Alias:** In tsconfig.json, confirm that the path is set as follows:

   "@/_": ["./src/_"]

#### Start the development Server:

To run your project, open the terminal and use:

    npm run dev
    or
    pnpm run dev

The package.json file contains three scripts:

    "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    },

    **dev:** For development mode (npm run dev).
    **build:** To build your project.

- Your project will run locally at https://localhost:3000.

## Ending Note:

Now go to 3.HelloWorld.md file for more information.
