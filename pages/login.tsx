import { supabase } from "../services/supabaseClient";
import GoogleIcon from "@mui/icons-material/Google";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { useContext } from "react";
import { PostsContext } from "../context/PostsContext";
import NavBar from "../components/nav/nav";

export default function Login() {
  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.origin },
    });
  };
  const [posts, setPosts, preserve, setPreserve] =
    useContext(PostsContext).value;
  const router = useRouter();
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
          minHeight: "100vh",
        }}
      >
        <Button
          variant="contained"
          startIcon={<GoogleIcon />}
          onClick={signInWithGoogle}
          size="large"
        >
          Pierakstītes ar Google
        </Button>
      </div>
    </>
  );
}
