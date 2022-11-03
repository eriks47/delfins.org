import Link from "next/link";
import Head from "next/head";
import { remark } from "remark";
import html from "remark-html";
import { supabase } from "../../services/supabaseClient";
import sanitizeHtml from "sanitize-html";

// This function receives the `params` that are passed to
// the page. Here it receives an `id` and uses it to
// determine the qestion to display
export async function getStaticProps({ params }) {
  const { data, error, status } = await supabase
    .from("feed")
    .select("*")
    .order("id", { ascending: true });
  const questionData = data[params.id - 1];

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

// Here we need to tell `next.js` all the possible values
// of the path. Since the name of the path is it's `id` we
// fetch all the id's from the `feed` table
export async function getStaticPaths() {
  /*
  const { data, error, status } = await supabase
    .from("feed")
    .select("id")
    .order("id", { ascending: true });
     */
  const paths = [];
  for (let i = 0; i < 10000; ++i) paths.push({ params: { id: i.toString() } });
  return {
    paths,
    fallback: false,
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
