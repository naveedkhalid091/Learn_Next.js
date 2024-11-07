## Displaying data:

#### 1. Embedding content in TSX/JSX:

TSX/JSX allows you to write `HTML-like markup` in your JavaScript/TypeScript code. You can also **insert JavaScript expressions** within JSX by using **curly braces** `{}`.

#### 2. Displaying data with variables:

You can display a variable inside JSX/TSX by wrapping it in curly braces. For example, `{user.name}` will show the value of **user.name** in your HTML.

Code Example:

```typescript
return <h1>{user.name}</h1>;
```

#### 3. Setting Attributes with JavaScript:

When setting attributes like **className or src** in JSX/TSX, you can use either **quotes sign or curly braces**:

- Use quotes for plain strings, e.g., className="avatar"

* Use curly braces for JavaScript expressions, e.g., **_src={user.imageUrl}_**

#### 4. Handling Complex Expressions:

You can include more complex JavaScript expressions within the curly braces, **like string concatenation**, e.g., `alt={'Photo of ' + user.name}`.

#### 5. Inline Styles:

The style attribute in JSX takes an object. You can set styles dynamically based on JavaScript variables. For example:

```typescript
style={{
width: user.imageSize,
height: user.imageSize
}}
```
