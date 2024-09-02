## Conditional Rendering:

Conditional rendering in React is how you decide what to show in the UI based on certain conditions. It's like saying, "If this condition is true, show this thing; otherwise, show something else."

In React, there is no special syntax for writing conditions. Instead, you’ll use the same techniques as you use when writing regular JavaScript code. For example, you can use an if statement to conditionally include JSX:

        let content;

        if (isLoggedIn) {
        content = <AdminPanel />;
        } else {
        content = <LoginForm />;
        }
        return (
        <div>
            {content}
        </div>
        );

#### Using the Ternary Operator:

Another way to do this is with the ternary operator. It's a shorter way to write the same logic.

    function Greeting({ isLoggedIn }) {
    return (
        <h1>{isLoggedIn ? 'Welcome back!' : 'Please log in.'}</h1>
    );
    }

Here, isLoggedIn ? 'Welcome back!' : 'Please log in.' means if isLoggedIn is true, show "Welcome back!", otherwise show "Please log in."
