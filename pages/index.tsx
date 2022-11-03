// Home Component - root component of the app

import Head from "next/head";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import styles from "../styles/Home.module.css";
import useSWR from "swr";
import Post from "../components/post/post";
import { DolphinContext } from "../context/DolphinContext";
import { supabase } from "../services/supabaseClient";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const { currentUser } = useContext(DolphinContext);

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
      {currentUser ? (
        <>
          <p>Hello {currentUser.user_metadata.full_name}</p>
          <button onClick={() => supabase.auth.signOut()}>logout</button>
        </>
      ) : (
        <Link href="/login">please login</Link>
      )}

      {posts.map((post, index) => (
        // @ts-ignore
        <Post key={index} data={post} />
      ))}
    </div>
  );
}
