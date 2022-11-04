import { supabase } from "../services/supabaseClient";
import GoogleIcon from "@mui/icons-material/Google";
import Button from "@mui/material/Button";

export default function Login() {
  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.origin },
    });
  };
  return (
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
  );
}
