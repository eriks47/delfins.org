import { useContext, useState, useEffect } from "react";
import { supabase } from "../../services/supabaseClient";
import { DolphinContext } from "../../context/DolphinContext";
import { useRouter } from "next/router";

import Upvote from "./upvote";
import Downvote from "./downvote";
import Stack from "@mui/material/Stack";

export default function VotePanel({ data }) {
  const { id, upvote, downvote, isQuestion } = data;
  const [state, setState] = useState("");
  const [offset, setOffset] = useState(0);
  const { currentUser } = useContext(DolphinContext);
  const router = useRouter();

  useEffect(() => {
    setOffset(0);
  }, [data]);

  useEffect(() => {
    if (!currentUser || !isQuestion) {
      setState("neutral");
      return;
    }
    if (data.upvoters.includes(currentUser.email)) {
      setState("upvoted");
    } else if (data.downvoters.includes(currentUser.email)) {
      setState("downvoted");
    }
  }, [currentUser]);

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: document.location.href },
    });
  };

  async function toggleState(element: string) {
    if (element === "downvoted") {
      if (state === "downvoted") {
        setState("neutral");
        setOffset(0);
        const promises = await supabase.rpc("pop_array_downvoters", {
          x: currentUser.email,
          row_id: id,
        });
      } else if (state == "neutral") {
        setState("downvoted");
        setOffset(-1);
        const promises = await supabase.rpc("append_array_downvoters", {
          x: currentUser.email,
          row_id: id,
        });
      } else {
        setState("downvoted");
        setOffset(-1);
        const promises = [
          supabase.rpc("append_array_downvoters", {
            x: currentUser.email,
            row_id: id,
          }),
          supabase.rpc("pop_array_upvoters", {
            x: currentUser.email,
            row_id: id,
          }),
        ];
        await Promise.all(promises);
      }
    } else {
      if (state === "downvoted") {
        setState("upvoted");
        setOffset(1);
        const promises = [
          supabase.rpc("pop_array_downvoters", {
            x: currentUser.email,
            row_id: id,
          }),
          supabase.rpc("append_array_upvoters", {
            x: currentUser.email,
            row_id: id,
          }),
        ];
        await Promise.all(promises);
      } else if (state == "neutral") {
        setState("upvoted");
        setOffset(1);
        const promises = await supabase.rpc("append_array_upvoters", {
          x: currentUser.email,
          row_id: id,
        });
      } else {
        setState("neutral");
        setOffset(0);
        const promises = await supabase.rpc("pop_array_upvoters", {
          x: currentUser.email,
          row_id: id,
        });
      }
    }
  }

  return (
    <Stack
      spacing={0}
      style={{
        marginRight: "16px",
        width: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "column",
      }}
    >
      <Upvote
        onClick={() =>
          currentUser ? toggleState("upvoted") : signInWithGoogle()
        }
        isActive={state === "upvoted"}
        isQuestion={isQuestion}
        id={id}
      />
      <p style={{ fontSize: "13px", marginTop: "-20px" }}>
        {data.upvoters.length - data.downvoters.length + offset} balsis
      </p>
      <Downvote
        onClick={() =>
          currentUser ? toggleState("downvoted") : signInWithGoogle()
        }
        isActive={state == "downvoted"}
        isQuestion={isQuestion}
        id={id}
      />
    </Stack>
  );
}
