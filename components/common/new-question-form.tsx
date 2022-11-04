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
  const [error, setError] = useState("");
  const { currentUser } = useContext(DolphinContext);
  const router = useRouter();

  async function handleSubmit() {
    if (!currentUser) router.push("/login");

    let result: any;
    if (props.isQuestion) {
      result = await supabase
        .from("feed")
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="outlined-basic"
          label="Virsraksts"
          variant="outlined"
        />
      )}
      <TextField
        style={{ marginTop: "10px" }}
        id="outlined-multiline-static"
        label={props.isQuestion ? "Jautājuma apraksts" : "Atblides apraksts"}
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
  );
}
