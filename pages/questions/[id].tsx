import Link from "next/link";
import Head from "next/head";
import { remark } from "remark";
import html from "remark-html";
import { supabase } from "../../services/supabaseClient";
import sanitizeHtml from "sanitize-html";

// Use get server side props because we need to run this dynamically
export async function getServerSideProps({ params }) {
  const { data, error, status } = await supabase
    .from("feed")
    .select("*")
    .eq("id", Number(params.id));
  const questionData = data[0];

  // Here we also sneek in markdown proccesing since we need
  // to do it on server side (this function runs server-side
  // as opposed to client-side)
  const processedContent = await remark()
    .use(html)
    .process(questionData.content);
  const contentHtml = sanitizeHtml(processedContent.toString());
  return {
    props: {
      questionData,
      contentHtml,
    },
  };
}

export default function Question({ questionData, contentHtml }) {
  return (
    <>
      <Head>
        <title>{questionData.title}</title>
      </Head>
      <h1>{questionData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      <Link href="/">Come home white man(this is clickable)</Link>
    </>
  );
}
