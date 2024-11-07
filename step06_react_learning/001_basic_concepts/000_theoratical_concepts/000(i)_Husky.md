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

#### Important points for Husky are given below:

**Project-Specific Installation:** Husky is designed to be installed on a per-project basis. This means that each project where you want to use Husky requires its own installation. The setup steps you provided are correct for configuring Husky within a single project.

**No Global Installation:** Husky doesn’t support a global installation in the way some CLI tools do. This is because Git hooks (like pre-commit and pre-push) need to be configured in each specific project’s .git directory. By installing Husky on a per-project basis, it ensures that the hooks are correctly applied to each project's repository and do not interfere with other projects.
