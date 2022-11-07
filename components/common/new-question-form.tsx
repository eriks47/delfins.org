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
  const [tags, setTags] = useState("");

  const [titleError, setTilteError] = useState("");
  const [contentError, setConentError] = useState("");
  const [tagsError, setTagsError] = useState("");

  const [error, setError] = useState("");
  const { currentUser } = useContext(DolphinContext);
  const router = useRouter();

  async function handleSubmit() {
    if (!currentUser) router.push("/login");

    if (
      titleError ||
      contentError ||
      tagsError ||
      (props.isQuestion && !title) ||
      !content
    ) {
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
          author_pfp: currentUser.user_metadata.avatar_url,
        })
        .select();
    } else {
      const res = [
        supabase
          .from("answers")
          .insert({
            content,
            author: currentUser.user_metadata.full_name,
            questionId: Number(props.questionId),
            author_pfp: currentUser.user_metadata.avatar_url,
          })
          .select(),
        supabase.rpc("add_answer", { row_id: props.questionId }),
      ];
      await Promise.all(res);
    }
    setContent("");
    setTitle("");
    if (result && result.error) setError(result.error.message);
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

  function handleTagsChange(e) {
    const textEntered = e.target.value;
    setTags(textEntered);
    if (tags.split(" ")[0].length === 0) {
      setTagsError("ERROR");
    } else {
      setTagsError("");
    }
  }

  function handleContentChange(e) {
    const textEntered = e.target.value;
    setContent(textEntered);
    if (textEntered.length < 15) {
      setConentError("Jautājuma aprakstam jabūt vismaz 15 burtu garam");
    } else {
      setConentError("");
    }
  }

  return (
    <div
      style={{
        display: "flex",
        padding: "20px 0",
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
      {props.isQuestion && (
        <TextField
          style={{ marginTop: "15px" }}
          error={!!tagsError}
          value={tags}
          onChange={handleTagsChange}
          id="outlined-basic"
          label="Marķējumi"
          variant="outlined"
          helperText={
            "Atdalat marķējumus ar tukšuma zīmi, jāievada vismaz viens marķējums"
          }
        />
      )}
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
