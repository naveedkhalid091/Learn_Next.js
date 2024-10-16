## Zod:

Zod is a powerful library for `schema-based validation`, and it can be used alongside libraries like `React Hook Form` to enhance validation, especially for complex or reusable form structures.

One key difference between `Zod` and `React Hook Form's` native validation is that Zod allows you to define a `reusable schema` for form validation rules `in one place`, which you can apply across `different parts of your form` or `multiple forms`. This prevents the redundancy of writing similar validation logic repeatedly for each input.

`React Hook Form` is primarily a form management library, and its native validation works well for simple forms. However, when forms grow in complexity or when you want to centralize and reuse validation logic, Zod simplifies the process by allowing you to define and reuse a validation schema.

For example, instead of repeating validation logic across multiple input fields, you can define a Zod schema once and then reference it wherever needed, ensuring consistency and reducing redundancy.

## How to use the Zod library?

1. Install the Zod library `pnpm install zod`
2. Install the hookform/resolvers/zod as: `pnpm install zod @hookform/resolvers`
3. import `zod` in your project as:
4. import `{ zodResolver }` from `"@hookform/resolvers/zod"`;
5. Define schemas of your form and finally apply schema.

Below is the exmaple of code taken from `Ract-Hook-form` but with an only change of including schema and finally you will notice by comparing both codes before zod and after zod library, and you will conclude that schema has made the developers' life very easy by not writting the same validation rules again and again.

            "use client";
            import { useForm } from "react-hook-form";
            import React from "react";
            import { z } from "zod";
            import { zodResolver } from "@hookform/resolvers/zod";

            const schema = z.object({
            username: z
                .string()
                .min(4, "Write min 4 characters")
                .max(12, "Write max 12 characters"),
            email: z.string().email("Must be a valid email"),
            channel: z
                .string()
                .min(3, "Min 3 characters are allowed")
                .max(15, "Max 15 characters"),
            });

            type FormTypes = z.infer<typeof schema>;

            function Zodform() {
            const form = useForm<FormTypes>({
                resolver: zodResolver(schema), // Use Zod for validation as a default value
            });

            const {
                register,
                handleSubmit,
                formState: { errors },
            } = form;

            console.log(errors);

            return (
                <div>
                <p className="text-blue-500 text-justify">
                    Below is the concept of React Hook Form with Zod
                </p>
                <br />
                <form
                    onSubmit={handleSubmit((data) => {
                    console.log(data); // Data is now type-safe
                    })}
                    className="grid mr-auto"
                >
                    <label htmlFor="username">Username:</label>
                    <input
                    type="text"
                    id="username"
                    {...register("username")}
                    className="border border-gray-300 focus:outline-none focus:border-blue-500 p-2 rounded w-full"
                    />
                    {errors.username && (
                    <p className="text-red-800">{errors.username.message}</p>
                    )}

                    <label htmlFor="email">E-mail:</label>
                    <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className="border border-gray-300 focus:outline-none focus:border-blue-500 p-2 rounded w-full"
                    />
                    {errors.email && <p className="text-red-800">{errors.email.message}</p>}

                    <label htmlFor="channel">Channel Name:</label>
                    <input
                    type="text"
                    id="channel"
                    {...register("channel")}
                    className="border border-gray-300 focus:outline-none focus:border-blue-500 p-2 rounded w-full"
                    />

                    <button className="grid hover:bg-fuchsia-300 rounded-br m-3 bg-slate-400">
                    Submit
                    </button>
                </form>
                </div>
            );
            }

            export default Zodform;
