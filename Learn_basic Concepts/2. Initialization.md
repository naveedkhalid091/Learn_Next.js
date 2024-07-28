## Starting Note
If you have learnt content on `1.Basic_Concept.md`, then studying this file is relevent.

## Project Initialization 

Before Installing the Next.js you must ensure the version of Node. which must not be latest than 18.16.7. 
Check the Node version as: `Node --version`

Copy and paste below mentioned command in your terminal `(Project Route)` from Next.js website  

` npx create-next-app@latest `
            or 
` create creat-next-app@latest `

#################################### `Optional content till 51st line` ##################################
#########################################################################################################
  `Note`: This command is also mentioned under the `get Started` Button of `https://nextjs.org/`.

  Follow the propmt questions on the terminal. 
 
      1). `create-next-app@14.2.5
          Ok to proceed? (y) ---> "Write Y"
      2). What is your project named? ` Your Project name Must not be on capital and must not be contain any space`
      3). Would you like to use TypeScript? » No / Yes  ---> `click on Yes`
      4). Would you like to use ESLint? » No / Yes  ---> ` Click on Yes`  : ESLint are rules which we will learn later on. 
      5). Would you like to use Tailwind CSS? » No / Yes  ---> ` Click on Yes`.
      6). Would you like to use `src/` directory? ... No / Yes  ---> ` Click on Yes`. 
      7). Would you like to use App Router? (recommended) » No / Yes ---> ` Click on Yes`. 
      Note: If you will click on `NO` then next.js will start with page router and the workings of configurations of Page and App routers are different. We will learn "APP Router". 
      8) Would you like to customize the default import alias (@/*)? » No / Yes  ----> ` Click on No`.

Your Project will begin to install after all above 8 prompt questions. 

  Note: If you encounter any error after installation then you will have to create new project. after deleting the existing one. 

The next step is that you need to verify if your project has installed as per your requirments or not?  

  1. To check if your Project name is correct, you need to check the folder name which is automatically made. 
  2. TO check if your project has typeScript installed or not then check if your porject contains `tsconfig.json` or not? 
  3. Don't change `tsconfig.json` file which you normally change in typeScript project, but in Next.js basic configurations will not be changed.  
  4. To varify if your project has EsLint is available? then check `.eslinttrc.json` file is available after the `src` file or not? 
  5. At the end of your files you can verify `tailwind.config.ts` file and you must have following three imports inside the `src>globals.css

  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  6. verfiy if `src` folder exist in your project or not. 
  7. To verify if `App Router` is installed ---> expand the `src` folder and you will see the app folder inside the `src` as `src\app`
  8. To verify the import alias, go to the `tsconfig.json` file and find `Path` the path would be equal to ` "@/*": ["./src/*"] ` it means that when ever you will mention ` "@/*" ` it will be equal to ` ["./src/*"] `. 

###############################################################################################################################################`Optional cotent Ended`############################################

## Start the development Server
To run the your project, you need to open the terminal `npm run dev` and there are three types of scripts in inside the package.json file

"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
  }, 

    i) 'dev' means --> When you are working at development stage or your local/laptop stage then you need to mention ` npm run dev ` commmand. 
    ii) 'build' means --> When you build then your project start to build. 

When you write `npm run dev` or `pnpm dev` then your project will run at local with a local 
`https://localhost:3000`. this https://localhost:3000 keyword is basically your IP Address. 

## Ending Note:
Now go to 3.HelloWorld.md file for more information.


