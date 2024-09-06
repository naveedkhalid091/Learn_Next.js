What is Husky?

Huskay is basically a tool which enforce you to correct the code by running scripts before actions like `git commit` and `git push`.

In other words husky avoids sending bad codes into your repository.

Installing Husky in your projects:

#### Documentation link of Husky is :

`https://typicode.github.io/husky/`

#### Downloading command using pnpm :

`pnpm add --save-dev husky`

#### Husky init (recommended)

The init command simplifies setting up husky in a project. It creates a pre-commit script in .husky/ and updates the prepare script in package.json. Modifications can be made later to suit your workflow.

`pnpm exec husky init`
