## Rich text:

In this step we will learn how to fetch richtext, images, and references from Contentful.

Suppose you have created the rich text i.e images in your contentful studio.

You can install the library to fetch the rich text, try downloading the library from the following command:

```tsx
npm i @contentful/rich-text-react-renderer `
```

After downloading, import this library as:

```tsx
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
```

and finally render the rich text as follows:

```tsx
    <div>
    /*Calling the above imported liabrary*/
    {documentToReactComponents(item.fields.articleText)}
    <div>
```

Note: Any data which contains bold,italic styles are also called rich text and you have to import the above library to render the rich texts.

#### Q: How you would know that the data is a rich text or contains a plain text?

If you will inspect the json API file, the Rich Text content will always be structured as an `object` when retrieved via the Contentful API. It’s `not a simple string` but a `more complex` structure that can represent different types of content (e.g., paragraphs, headings, lists) along with formatting (e.g., bold, italic) and embedded elements (e.g., assets, entries).

Secondly, you can also look at the content model inside the contentful if you wanted to know the type of content.
