import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function getBlogs() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=article`
  );
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const blogs = await getBlogs();
  console.log(blogs);
  return (
    <ul>
      {blogs.items.map((item: any) => (
        <li key={item.sys.id}>
          <br />
          <h1>{item.fields.title}</h1>
          <br />
          <div>{item.fields.articleText.content[0].content[0].value}</div>
          <br />
          {/* Below is the rendering technique of rich text*/}
          <div>{documentToReactComponents(item.fields.articleText)}</div>
        </li>
      ))}
    </ul>
  );
}
