import { PostsContext } from "../context/PostsContext";
import NavBar from "../components/nav/nav";
import { useContext } from "react";
import { useRouter } from "next/router";
import NewQuestionForm from "../components/common/new-question-form";

export default function NewQuestion() {
  const router = useRouter();
  const [posts, setPosts, preserve, setPreserve] =
    useContext(PostsContext).value;

  return (
    <>
      <NavBar
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
