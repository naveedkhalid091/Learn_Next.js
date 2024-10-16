## Steps

1. Create a component called a `youtube form` and add following fields:
   i) UserName with input field
   ii) Email with its input field
   iii) Youtube Channel name with its input field

2. After creating a form, now you are ready to use the library called `React Hook forms` for adding validations into your form.

3. First, install the library:

   ` npm install react-hook-form`

Click here to visit the Official [React Hook Form](https://www.react-hook-form.com/) website for more detail.

Then, in a React component, you can use the useForm hook as:

         import { useForm } from 'react-hook-form';

         function YoutubeForm() {
         const form = useForm();
         return (
            <form></form>
         )
         }

4. Now you can call the methods of `useform()` by destructuring the object `useform()`, as follows
   (Bear it in your mind that register is the method of `useform()` ):

import { useForm } from 'react-hook-form';

         function YoutubeForm() {
         const form = useForm();
         const {register}=form;

         return (
            <form></form>
         )
         }

5. After calling each method,(like `register` is the first method) you can register/use the method straight away inside the `input` field by replacing the `name` attribute into `register` attribute as follows.

import { useForm } from 'react-hook-form';

         function YoutubeForm() {
         const form = useForm();
         const {register}=form;

         return (
            <form>
            <input {...register("firstName")} / >
            </form>
         )
         }

6. Now call the second method `handleSubmit` and apply it into the form `onSubmit` event handler, as below, and Note that onSubmit is a client component so don't forget to write `use client` on the top of the page otherwise you will face an Error.

"use client"
import { useForm } from 'react-hook-form';

         function YoutubeForm() {
         const form = useForm();
         const {register,handleSubmit}=form;

         return (
            <form onSubmit={handleSubmit((data))=>{
                  console.log(data)
            }}>
            <input {...register("firstName")} / >
            </form>
         )
         }

When the user submits the form, `handleSubmit` automatically checks all the input fields that have been registered using `register`. If any validation rules have been applied, it ensures they are met before the form data is processed.
Once the form is valid, the data is passed to the callback function provided in `handleSubmit`. The data argument in the callback contains the form values in an object, where each key corresponds to a registered field's name.

7.  Now we will apply input validation rules for each input element. e.g We want to apply the `required` fields and `minimum charater` lenght inside the input element as follows.

    "use client"
    import { useForm } from 'react-hook-form';

             function YoutubeForm() {
             const form = useForm();
             const {register,handleSubmit}=form;

             return (
                <form onSubmit={handleSubmit((data))=>{
                      console.log(data)
                }}>
                <input {...register("firstName"),{required:true , minLenght: 4, maxLenght:12}} / >
                </form>
             )
             }

8.  If you wanted to add a custom message inside your set rules then you can add a message along with your rules as follows:

    "use client"
    import { useForm } from 'react-hook-form';

             function YoutubeForm() {
             const form = useForm();
             const {register,handleSubmit}=form;

             return (
                <form onSubmit={handleSubmit((data))=>{
                      console.log(data)
                }}>
                <input {...register("username"){required:"This is Required field" , minLenght: {value:4, message:"Min 4 characters are required "},
                maxLenght:{value:12, message: "Max 12 characters are allowed"}}
                }
                / >
                </form>
             )
             }

9.  The Above created messages would not be displayed in th UI because FIRSTLY, you have to use the `error` state and then write `if-else statement` in `ternary operator style` to show the error message. Note that, we will use the if-else in ternary operators style becasue react doesn't allow traditional `if-else` inside the scope of `return`, however you can use if-else before the return statement.

Error state can be used as follows:

"use client"
import { useForm } from 'react-hook-form';

             function YoutubeForm() {
             const form = useForm();
             const {register,handleSubmit, formState:{errors} }=form;

             console.log(errors)

             return (
                <form onSubmit={handleSubmit((data))=>{
                      console.log(data)
                }}>
                <input {...register("username"),{required:"This is Required field" , minLenght: {value:4, message:"Min 4 characters are required "},
                maxLenght:{value:12, message: "Max 12 characters are allowed"}}
                }
                / >
               /* Syntax of ternary operator is:
               condition ? expressionIfTrue : expressionIfFalse;
               */
               {errors.username && (
                <p className="text-red-800">{errors.username.message}:null </p>
           )}
            </form>
             )
             }

10. After the above code you will notice a type Error, so you can define the type and incorporate the types with the useForm() as follows:

    "use client";
    import { useForm } from "react-hook-form";
    import React from "react";

    interface FormTypes {
    username: string;
    email: string;
    channel: string;
    }

               function Youtubeform() {
         const form = useForm<FormTypes>();
         const {
            register,
            handleSubmit,
            formState: { errors },
         } = form;

         console.log(errors);

         return (
            <div>
               <p className="text-blue-500 text-justify">
               Below is the concept of React Hook Form
               </p>
               <br />
               <form
               onSubmit={handleSubmit((data) => {
                  console.log(data);
               })}
               className="grid mr-auto"
               >
               <label htmlFor="username">Username:</label>
               <input
                  type="text"
                  id="username"
                  {...register("username", {
                     required: "*required*",
                     minLength: { value: 4, message: "Write min 4 characters" },
                     maxLength: { value: 12, message: "Write max 12 characters" },
                  })}
                  className="border border-gray-300 focus:outline-none focus:border-blue-500 p-2 rounded w-full"
               />
               {errors.username && (
                  <p className="text-red-800">{errors.username.message}</p>
               )}

               <label htmlFor="email">E-mail:</label>
               <input
                  type="email"
                  id="email"
                  {...register("email", {
                     required: "**Email field is required",
                     minLength: { value: 4, message: "Min 4 characters are allowed" },
                  })}
                  className="border border-gray-300 focus:outline-none focus:border-blue-500 p-2 rounded w-full"
               />
               {errors.email && <p className="text-red-800">{errors.email.message}</p>}
               <label htmlFor="channel">Channel Name:</label>
               <input
                  type="text"
                  id="channel"
                  {...register("channel", {
                     minLength: 3,
                     maxLength: 15,
                  })}
                  className="border border-gray-300 focus:outline-none focus:border-blue-500 p-2 rounded w-full"
               />

               <button className="grid hover:bg-fuchsia-300 rounded-br m-3 bg-slate-400">
                  Submit
               </button>
               </form>
            </div>
         );
         }

Now you are done with setting the basic form rules:
