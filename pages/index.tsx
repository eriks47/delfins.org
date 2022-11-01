// Home Component - root component of the app

import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import useSWR from "swr";
import Post from "../components/post/post";

export default function Home() {
  const [posts, setPosts] = useState([]);

  // @ts-ignore
  const fetcher = (...args: any) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("api/get-posts", fetcher, {
    refreshInterval: 200,
  });
  useEffect(() => {
    if (!data) return;
    setPosts(data.data);
  }, [data]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Vaver[a]s - Kur Skolēni Atbalsta, Mācās, Dalās</title>
        <meta name="description" content="Sveika pasaule" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {posts.map((post, index) => (
        // @ts-ignore
        <Post key={index} data={post} />
      ))}
    </div>
  );
}
