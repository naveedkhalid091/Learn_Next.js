## Layouts 

It is a shared UI for a perticular segment and its children. Layout is never applied on its parents. It is only applied to its childrens and perticular segment/page. 

The sidebar's design remains the same in all the app, it is the best example of a layout. 

So any file or component which remains the same throughout the application is called `layout`. 

The layout file is created with the name of `layout.tsx`. If it is present at the top level then top level `layout.tsx` file is called `root layout` file, while if it is created inside the folders then this is called a `layout` file. 

- Layout file will never be visible in a route, only the written content inside the `page.tsx` is publicly accessable.  


`The basic code of layout is:` 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

Lets understand or write the code step by step: 

## Step#1 - understanding what is {children}? 

export default function RootLayout(`{children}`){

}

{ children,} = Is a destructuring of a props object 

`What is destructuring?` 
When you extract a key's value from an object then it is called a destructuring. 

suppose if you have an object called props

props={
name:"",
children:"",
}

you can extract values as 
props.name
props.children

But in destructuring you access the values as

`const {children}=props`

So in above method we are only extracting the value of children from an object.

So instead of writting props like below example: 

export default function RootLayout(`props`){

} 

You write code in destructuring style as 

export default function RootLayout(`{children}`){

} 

## Step #2 understanding data types 

`export default function RootLayout({children,}:{children: React.ReactNode;})`

Now as we are writing a typeScript code so we are also required to write the types of {children},

so we can write the types either one of the following methods
 i) type keyword
 ii) interface keyword
 iii) inline typing.

we can write an inline code as
export default function RootLayout({children,}:{children:any})

We can use `any` type if we don't know the children's type. 

Every component in the react is called a `Node` so that's why the type of every child will always be a `ReactNode`. 

So first you need to import the `React` and then call the react to use the `ReactNode` type as follows. 

export default function RootLayout({children,}:{children:React.ReactNode;
}){

}

## Step#3 - Make your code a `readonly` code. 

As you can't update childrens so `readonly` keyword is added

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){

}

## Step#4 - Rendering Childrens

You will have to render the childrens (Home Page, Other pages) etc inside the layout. if you will not render the childrens then your application will only show a layout without childrens (Home page,OtherPages). 

So In React, rendering can only be done thourgh the curly braces {}. 

if you wanted to render childrens then you will have to write childrens as {childrens} in the body tag oh HTML. as below 



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
 return(
  <html>
  <body> {children} </body>
  </html>
 )
}


Now You are done with the understanding of `layout.tsx`

## Note:
It is important to note that the position of rending {childrens} really matters in your app. 

If you will render your childrens within header, the header will include your childrens part e.g. the content of page.tsx will display in the header wrongly. 

So the rendering the position of {children} must always be noticed and its position must be carefully considered.   

####################OPTIONAL READING##########################
In the React component you can pass multiple props so by default every component support children props. 

In react there are two things 
 i) state - It is a component's own memory which you can update later (or State is mutable). 
 ii) props - When we pass a data from parents to its child then this is called props. (props are immutable). 
 It means that childs can't update its data which is received from parents. childs must use the `state` if childs need an update. 
############################################################
 
