## Displaying data:

#### 1. Embedding content in JSX:

JSX allows you to write `HTML-like markup` in your JavaScript code. You can also `insert JavaScript expressions` within JSX by using `curly braces {}`.

#### 2. Displaying data with Variables:

You can display a variable inside JSX by wrapping it in curly braces. For example, `{user.name}` will show the value of user.name in your HTML.

Code Example:

        return (
        <h1>
            {user.name}
        </h1>
        );

#### 3. Setting Attributes with JavaScript:

When setting attributes like className or src in JSX, you can use either quotes or curly braces:

- Use quotes for plain strings, e.g., className="avatar"

* Use curly braces for JavaScript expressions, e.g., `src={user.imageUrl}`

#### 4. Handling Complex Expressions:

You can include more complex JavaScript expressions within the curly braces, like string concatenation, e.g., `alt={'Photo of ' + user.name}`.

#### 5. Inline Styles:

The style attribute in JSX takes an object. You can set styles dynamically based on JavaScript variables. For example:

            style={{
            width: user.imageSize,
            height: user.imageSize
            }}
