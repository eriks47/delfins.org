interface PostData {
  id: number;
  author: string;
  title: string;
  content: string;
  upvote: number;
  downvote: number;
}

export default function Post({ data }) {
  return (
    <div>
      <h1>{data.title}</h1>
      <h2>{data.author}</h2>
      <p>{data.content}</p>
      <h2>Upvotes: {data.upvote - data.downvote}</h2>
      <br />
    </div>
  );
}
