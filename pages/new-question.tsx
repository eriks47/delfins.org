import { useContext } from "react";
import { useRouter } from "next/router";
import NewQuestionForm from "../components/common/new-question-form";
import Head from "next/head";
import { PostsContext } from "../context/PostsContext";
import AltNavBar from "../components/NavBar/NavBar";

export default function NewQuestion() {
  const router = useRouter();
  const [posts, setPosts, preserve, setPreserve] =
    useContext(PostsContext).value;

  return (
    <>
      <Head>
        <title>Uzdot Jautājumu - Delfīns</title>
      </Head>
      <AltNavBar
        changePosts={(p) => {
          router.push("/");
          setPosts(p);
          setPreserve(true);
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
        }}
      >
        <NewQuestionForm isQuestion={true} questionId={null} />
      </div>
    </>
  );
}
