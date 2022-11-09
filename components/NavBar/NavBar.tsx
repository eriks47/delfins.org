import AppBar from "@mui/material/AppBar";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { DolphinContext } from "../../context/DolphinContext";
import { supabase } from "../../services/supabaseClient";
import Image from "next/image";

import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function NavBar({ changePosts }) {
  const [alert, setAlert] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(700));
  const { currentUser } = useContext(DolphinContext);
  const router = useRouter();

  async function fullTextSearch(query: string) {
    const contentData = await supabase
      .from("questions")
      .select()
      .textSearch("content", query);
    const titleData = await supabase
      .from("questions")
      .select()
      .textSearch("title", query);
    let aanswerData = await supabase
      .from("answers")
      .select()
      .textSearch("content", query);
    const answerData = await supabase
      .from("questions")
      .select("*")
      .eq("id", aanswerData.data[0].questionId);
    let ddata = contentData.data.concat(titleData.data, answerData.data);
    let set = new Set();
    let data = [];
    ddata.forEach((post) => {
      if (set.has(post.id)) return;
      set.add(post.id);
      data.push(post);
    });
    changePosts(data);
  }

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

  const searchPopup = (
    <Dialog open={search}>
      <DialogTitle>{"Meklēt"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Ievadiet meklējamo vārdu vai vārdu savienojumu zemāk.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Meklējums"
          type="email"
          fullWidth
          variant="standard"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setSearch(false)}>Atcelt</Button>
        <Button
          onClick={() => {
            setSearch(false);
            if (searchValue) fullTextSearch(`'${searchValue}'`);
          }}
          variant="contained"
        >
          Meklēt
        </Button>
      </DialogActions>
    </Dialog>
  );

  const alertPopup = (
    <Dialog open={alert}>
      <DialogTitle>{"Izrakstīties no konta?"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Izrakstoties no konta jūs zaudēsiet iespēju iesaistīties jautājumos.
          Tas nozīmē, ka jūs nevarēsiet uzdot jautājumus, atbildēt uz tiem un
          izvērtēt tos.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setAlert(false)}>Atcelt</Button>
        <Button
          onClick={() => {
            setAlert(false);
            signOut();
          }}
          variant="contained"
        >
          Izrakstīties
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <div style={{ flex: 1 }}>
      {alert && alertPopup}
      {search && searchPopup}
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
          {mobile ? (
            <IconButton
              style={{ color: "white" }}
              onClick={() => setSearch(true)}
            >
              <SearchIcon color="inherit" />
            </IconButton>
          ) : (
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && searchValue)
                    fullTextSearch(`'${searchValue}'`);
                }}
                placeholder="Meklēt..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          )}
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
                    onClick={() => setAlert(true)}
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
