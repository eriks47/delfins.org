// Home Component - root component of the app

import Head from "next/head";
import { useEffect, useState, useContext } from "react";
import styles from "../styles/Home.module.css";
import useSWR from "swr";
import Post from "../components/post/post";
import { DolphinContext } from "../context/DolphinContext";
import { PostsContext } from "../context/PostsContext";
import { useRouter } from "next/router";
import NavBar from "../components/nav/nav";
import AltNavBar from "../components/NavBar/NavBar";

import LinearProgress from "@mui/material/LinearProgress";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";

export default function Home() {
  const [page, setPage] = useState(1);
  const [loadingQuestion, setLoadingQuestion] = useState(false);
  const { currentUser } = useContext(DolphinContext);
  const [posts, setPosts, preserve, setPreserve] =
    useContext(PostsContext).value;
  const router = useRouter();

  // @ts-ignore
  const fetcher = (...args: any) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("api/get-posts", fetcher, {
    refreshInterval: 200,
  });

  useEffect(() => {
    if (!data) return;
    if (preserve) {
      setPreserve(false);
      return;
    }
    setPosts(data.data);
  }, [data]);

  const pageBody = (
    <div style={{ padding: "0 2rem" }}>
      <div className={styles.header}>
        <h1>Question feed</h1>
        <Button
          onClick={() => router.push("/new-question")}
          variant="contained"
        >
          Uzdot jautājumu
        </Button>
      </div>

      <Stack direction="column" spacing={3}>
        {posts.map((post, index: number) => {
          post.isQuestion = true;
          if (Math.floor(index / 5 + 1) == page) {
            return (
              <Post key={index} data={post} onClick={setLoadingQuestion} />
            );
          }
          return;
        })}
      </Stack>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Pagination
          count={Math.floor(posts.length / 5) + 1}
          onChange={(e, page) => setPage(page)}
          color="primary"
        />
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Delfīns - Vieta Kur Skolēni Atbalsta, Mācās, Dalās</title>
        <meta name="description" content="Sveika pasaule" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <AltNavBar />
        <NavBar changePosts={setPosts} />

        {loadingQuestion ? (
          <>
            <LinearProgress />
            <Skeleton
              variant="text"
              sx={{ fontSize: "2em", margin: "22px 0" }}
              width="500px"
            />
            <Skeleton variant="rounded" width={500} height={60} />
          </>
        ) : (
          pageBody
        )}
      </>
    </div>
  );
}
