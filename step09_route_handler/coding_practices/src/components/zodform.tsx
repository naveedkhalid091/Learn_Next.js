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
