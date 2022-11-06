import AppBar from "@mui/material/AppBar";
import { useContext } from "react";
import { useRouter } from "next/router";
import { DolphinContext } from "../../context/DolphinContext";
import { supabase } from "../../services/supabaseClient";
import Image from "next/image";

import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import LockOpenIcon from "@mui/icons-material/LockOpen";

export default function NavBar() {
  const { currentUser } = useContext(DolphinContext);
  const router = useRouter();

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.origin },
    });
  };

  function signOut() {
    supabase.auth.signOut();
    router.push("/");
  }

  return (
    <div style={{ flex: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ margin: "0 12px" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Delfins.org
          </Typography>
          <div>
            {currentUser ? (
              <div
                style={{
                  margin: "0 1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Image
                  style={{ borderRadius: "9999px" }}
                  width="30"
                  height="30"
                  src={currentUser.user_metadata.avatar_url}
                  alt={currentUser.user_metadata.full_name}
                />
                <Tooltip title="Izrakstīties" placement="bottom">
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    onClick={signOut}
                  >
                    <LogoutIcon />
                  </IconButton>
                </Tooltip>
              </div>
            ) : (
              <Tooltip title="Pierakstītes" placement="bottom">
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  onClick={signInWithGoogle}
                >
                  <LockOpenIcon />
                </IconButton>
              </Tooltip>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
