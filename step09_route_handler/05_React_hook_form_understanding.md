# React Hook Form:

It is a small library which make it easy to control and validate the `form`.

Why to use React Form Hooks?

- Manage Form data
- Submit form data
- Enforce Validations
- Provide visual feedback

Lets understand the use cases of `Reach Hook Form` with a real life example.

## Real-Life Scenario: User Registration Form:

Imagine you’re building a user registration form for an e-commerce website where users need to provide:

- Name
- Email
- Password
- Confirm Password

#### Without Validation (Trusting User Input):

If you choose to trust the user’s input without any validation:

- A user might enter an incorrectly formatted email like user@com instead of a valid email like user@example.com.
- A user might make a typo in the Confirm Password field, which doesn’t match the Password field.

* A user could enter a password that is too short or too weak, like 12345, which could compromise their account security.

In these cases, the user could technically "submit" the form and access your website. But without validation, you can’t ensure that the data is complete, correct, or secure.

#### With Validation (Using React Hook Form):

Now, let’s see why validation is essential to avoid such issues and how it helps improve the quality of user input.

###### Name Validation:

- Ensure the name field isn’t left blank (required).

###### Email Validation:

- Ensure the email is in the correct format (e.g., user@example.com).
- Prevent the user from submitting an invalid email like user@com, which won’t be useful for further communication (e.g., sending order confirmations).

###### Password Validation:

- Ensure the password meets security requirements (e.g., at least 8 characters, contains numbers, symbols, etc.).

* Protect user accounts from weak passwords that can easily be hacked.

###### Confirm Password Validation:

- Ensure that the “Confirm Password” field matches the “Password” field to avoid issues where users can't log in because of a typo.

###### Coding Example:

        import React from 'react';
        import { useForm } from 'react-hook-form';

        function RegistrationForm() {
        const { register, handleSubmit, formState: { errors } } = useForm();
        const onSubmit = data => {
        console.log(data);
        // Here, we can safely send the data to our backend or database
        };

        return (
        <form onSubmit={handleSubmit(onSubmit)}>
        {/_ Name Field _/}
        <label>Name:</label>
        <input
        {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p>{errors.name.message}</p>}

                {/* Email Field */}
                <label>Email:</label>
                <input
                    {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                    }
                    })}
                />
                {errors.email && <p>{errors.email.message}</p>}

                {/* Password Field */}
                <label>Password:</label>
                <input
                    type="password"
                    {...register("password", {
                    required: "Password is required",
                    minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                    }
                    })}
                />
                {errors.password && <p>{errors.password.message}</p>}

                {/* Confirm Password Field */}
                <label>Confirm Password:</label>
                <input
                    type="password"
                    {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) => value === getValues("password") || "Passwords do not match"
                    })}
                />
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

                <button type="submit">Register</button>
                </form>

        );
        }

        export default RegistrationForm;

Note: HTML provides built-in validation features, such as the `required` attribute and input types like email for basic validation but it has some limitations compared to `React Hook form`.

##### Here are a few reasons why React Hook Form (or other JavaScript-based validations) can be beneficial even when HTML validation exists:

1. Customizable Error Messages:

   - HTML: The browser shows default error messages that cannot be easily customized (e.g., “Please fill out this field” for a required input).
   - React Hook Form: You can easily define custom error messages based on your specific needs.

#### Exmaple:

    <input
    {...register("email", {
        required: "Email is required",
        pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email address",
        },
    })}
    />
    {errors.email && <p>{errors.email.message}</p>}

2. Advanced Validation Logic:

   - HTML: HTML form validation only supports basic validation (e.g., required fields, email format, min/max lengths).

   * React Hook Form: You can implement complex validation rules, such as checking if two passwords match or ensuring a password contains special characters, numbers, and uppercase letters.

#### Example:

          <input
          type="password"
          {...register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "Password must be at least 8 characters long" },
              validate: (value) =>
              /[A-Z]/.test(value) || "Password must contain at least one uppercase letter",
          })}
          />
          {errors.password && <p>{errors.password.message}</p>}

3. Conditional Validation:

   - HTML: It is difficult to apply validation that depends on other fields. For example, requiring a "Phone Number" field only if the user selects a certain option (like "Contact me by phone").

   * React Hook Form: Allows dynamic validation, meaning you can apply or remove validation rules based on user interactions.

4. Form Performance:

   - HTML: Basic forms work well for small applications, but as forms get more complex (with hundreds of fields or dynamic fields), managing them manually with HTML can become inefficient and lead to performance issues.

   - React Hook Form: Optimizes performance by using uncontrolled components and minimizing re-renders, even with complex and dynamic forms.

5. Cross-Browser Consistency:

   - HTML: Different browsers may handle built-in validation differently. For example, the error message for a required field or invalid email address might vary from one browser to another.

   - React Hook Form: Provides a consistent experience across all browsers because the validation logic is handled by JavaScript, not the browser's native validation.

Read the content from official website and click on the `Get started button` and then follow the steps written inside the documentation.

Watch video tutorial of [React Hook Form](https://www.youtube.com/watch?v=Kpcy67SJzo8&list=PLplW4d4HPsEJvoHiI76nNR4fkoROKlher&index=1).
