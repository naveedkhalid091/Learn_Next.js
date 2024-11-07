## Shadcn UI Library Overview

Shadcn is an open-source UI library with reusable components like buttons, forms, and modals, built with Tailwind CSS and React for fast, visually appealing UIs.

## Setup:

### 1). Initialize Shadcn:

Run the `init` command in your project to set up Shadcn:

**for pnpm**
`pnpm dlx shadcn@latest init`

**or for npm**
`npx shadcn@latest init`

**or for yarn**
`yarn dlx shadcn@latest init`

**_Prompt Setup:_**

- Select the NewYork style.
- Choose a base color, such as slate.
- Use CSS variables for theming by selecting `yes`.

### 2). Adding Components:

    To add a specific Shadcn component, like a button, run:

    `pnpm dlx shadcn@latest add button`

    This command creates a `components/ui` folder with the component files (e.g., button.tsx for a button component).

### 3.)Using Shadcn Components in Your Code

    i) Import the desired component:

        ```typescript
        import { Button } from "@/components/ui/button";
        ```

## Changing the Shadcn Components.

    You can change the Shadcn UI components in two ways:
        i) Use the pre-defined available varients/style of components.
        ii) Create your own button style into the available variants and use that:

**i) Use the pre-defined available varients/style of components.**

First go inside the `components/ui/button.tsx`, you will see different style and size variant are pre-defined by the Shadcn UI.

To use that variants, write the variant props inside your button like below:

```tsx
<Button variant="YourVarient"> Shadcn UI Button</Button>
```

**Note:** IntelliSense will automatically give you suggestions about the style versions available in a button.

**ii) Create your own button style into the available variants and use that:**

To add custom styles, define a new variant (e.g., myself) in button.tsx:

suppose you have defined below variant of `myself`:

```typescript
variants:{myself:" px-1 my-4 bg-blue-500 rounded hover:text-lg hover:bg-blue-300",
}

```

Then, use it as follows:

```tsx
<Button variant="myself"> Shadcn UI Button</Button>
```

This overview covers the basics of installing, using, and customizing Shadcn UI components in your project.

See coding Exmaple inside the `01_shadcn` project.
