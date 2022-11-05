import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

import { useState, useContext } from "react";
import { supabase } from "../../services/supabaseClient";
import { DolphinContext } from "../../context/DolphinContext";
import { useRouter } from "next/router";

export default function NewQuestionForm(props: any) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [titleError, setTilteError] = useState("");
  const [contentError, setConentError] = useState("");
  const [error, setError] = useState("");
  const { currentUser } = useContext(DolphinContext);
  const router = useRouter();

  async function handleSubmit() {
    if (!currentUser) router.push("/login");

    if (titleError || contentError) {
      setError("Lūdzu aizpildat laukus pareizi");
      return;
    }

    let result: any;
    if (props.isQuestion) {
      result = await supabase
        .from("questions")
        .insert({
          title,
          content,
          author: currentUser.user_metadata.full_name,
        })
        .select();
    } else {
      result = await supabase
        .from("answers")
        .insert({
          content,
          author: currentUser.user_metadata.full_name,
          questionId: Number(props.questionId),
        })
        .select();
    }
    setContent("");
    setTitle("");
    if (result.error) setError(result.error.message);
    else router.push(props.isQuestion ? "/" : `/questions/${props.questionId}`);
  }

  function handleTitleChange(e) {
    const textEntered = e.target.value;
    setTitle(textEntered);
    if (textEntered.length < 12) {
      setTilteError("Virsrakstam jābūt vismaz 12 burtus garam");
    } else {
      setTilteError("");
    }
  }

  function handleContentChange(e) {
    const textEntered = e.target.value;
    setContent(textEntered);
    if (textEntered.length < 30) {
      setConentError("Jautājuma aprakstam jabūt vismaz 30 burtu garam");
    } else {
      setConentError("");
    }
  }

  return (
    <div
      style={{
        display: "flex",
        padding: "20px",
        flexDirection: "column",
        width: "60%",
        minWidth: "300px",
      }}
    >
      {props.isQuestion && (
        <TextField
          error={!!titleError}
          value={title}
          onChange={handleTitleChange}
          id="outlined-basic"
          label="Virsraksts"
          variant="outlined"
          helperText={titleError || ""}
        />
      )}
      <TextField
        error={!!contentError}
        style={{ marginTop: "15px" }}
        id="outlined-multiline-static"
        label={props.isQuestion ? "Jautājuma apraksts" : "Atblides apraksts"}
        multiline
        rows={4}
        value={content}
        onChange={handleContentChange}
        helperText={contentError || ""}
      />
      <Button
        style={{ marginTop: "15px", width: "100px" }}
        variant="contained"
        onClick={currentUser ? handleSubmit : () => router.push("/login")}
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
  );
}
