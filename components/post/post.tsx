import Link from "next/link";

interface PostData {
  id: number;
  author: string;
  title: string;
  content: string;
  upvote: number;
  downvote: number;
}

export default function Post(params: any) {
  const data: PostData = params.data;
  return (
    <div>
      <Link href={`questions/${data.id}`}>
        <h1>{data.title}</h1>
        <h2>{data.author}</h2>
        <p>{data.content}</p>
        <h2>Upvotes: {data.upvote - data.downvote}</h2>
        <br />
      </Link>
    </div>
  );
}
