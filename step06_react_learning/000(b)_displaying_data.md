## Displaying data:

#### JSX and JavaScript:

JSX allows you to write `HTML-like markup` in your JavaScript code. You can also `insert JavaScript expressions` within JSX by using `curly braces {}`.

#### Displaying Variables:

You can display a variable inside JSX by wrapping it in curly braces. For example, `{user.name}` will show the value of user.name in your HTML.

Code Example:

        return (
        <h1>
            {user.name}
        </h1>
        );

#### JSX Attributes:

When setting attributes like className or src in JSX, you can use either quotes or curly braces:

\*Use quotes for plain strings, e.g., className="avatar"

- Use curly braces for JavaScript expressions, e.g., src={user.imageUrl}
