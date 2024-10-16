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

export default Youtubeform;
