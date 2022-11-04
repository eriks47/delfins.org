import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

import { useState, useContext } from "react";
import { supabase } from "../services/supabaseClient";
import { DolphinContext } from "../context/DolphinContext";
import { useRouter } from "next/router";

export default function NewQuestion() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const { currentUser } = useContext(DolphinContext);
  const router = useRouter();

  async function handleSubmit() {
    if (!currentUser) router.push("/login");
    const result = await supabase
      .from("feed")
      .insert({
        title,
        content,
        author: currentUser.user_metadata.full_name,
      })
      .select();
    if (result.error) setError(result.error.message);
    else router.push("/");
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          padding: "20px",
          flexDirection: "column",
          width: "60%",
        }}
      >
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="outlined-basic"
          label="Virsraksts"
          variant="outlined"
        />
        <TextField
          style={{ marginTop: "10px" }}
          id="outlined-multiline-static"
          label="Jautājuma apraksts"
          multiline
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button
          style={{ marginTop: "10px", width: "100px" }}
          variant="contained"
          onClick={handleSubmit}
          type="submit"
        >
          Iesniegt
        </Button>
        {error && (
          <Alert style={{ marginTop: "10px" }} severity="error">
            {error}
          </Alert>
        )}
      </div>
    </div>
  );
}
