import { useContext, useState, useEffect } from "react";
import { supabase } from "../../services/supabaseClient";
import { DolphinContext } from "../../context/DolphinContext";
import { useRouter } from "next/router";

import Upvote from "./upvote";
import Downvote from "./downvote";
import Stack from "@mui/material/Stack";

export default function VotePanel({ data }) {
  const { id, isQuestion } = data;
  const [state, setState] = useState("neutral");
  const [offset, setOffset] = useState(0);
  const [offsetDefault, setOffsetDefault] = useState(0);
  const { currentUser } = useContext(DolphinContext);
  const router = useRouter();

  useEffect(() => {
    setOffset(0);
  }, [data]);

  useEffect(() => {
    if (!currentUser) {
      setState("neutral");
      return;
    }
    if (data.upvoters.includes(currentUser.email)) {
      setState("upvoted");
      setOffsetDefault(-1);
    } else if (data.downvoters.includes(currentUser.email)) {
      setState("downvoted");
      setOffsetDefault(1);
    }
  }, [currentUser]);

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: document.location.href },
    });
  };

  const rpc_pop_downvoters =
    (!isQuestion ? "ans_" : "") + "pop_array_downvoters";
  const rpc_append_downvoters =
    (!isQuestion ? "ans_" : "") + "append_array_downvoters";
  const rpc_pop_upvoters = (!isQuestion ? "ans_" : "") + "pop_array_upvoters";
  const rpc_append_upvoters =
    (!isQuestion ? "ans_" : "") + "append_array_upvoters";
  async function toggleState(element: string) {
    if (element === "downvoted") {
      if (state === "downvoted") {
        setState("neutral");
        setOffset(0 + offsetDefault);
        const promises = await supabase.rpc(rpc_pop_downvoters, {
          x: currentUser.email,
          row_id: id,
        });
      } else if (state == "neutral") {
        setState("downvoted");
        setOffset(-1 + offsetDefault);
        const promises = await supabase.rpc(rpc_append_downvoters, {
          x: currentUser.email,
          row_id: id,
        });
      } else {
        setState("downvoted");
        setOffset(-1 + offsetDefault);
        const promises = [
          supabase.rpc(rpc_append_downvoters, {
            x: currentUser.email,
            row_id: id,
          }),
          supabase.rpc(rpc_pop_upvoters, {
            x: currentUser.email,
            row_id: id,
          }),
        ];
        await Promise.all(promises);
      }
    } else {
      if (state === "downvoted") {
        setState("upvoted");
        setOffset(1 + offsetDefault);
        const promises = [
          supabase.rpc(rpc_pop_downvoters, {
            x: currentUser.email,
            row_id: id,
          }),
          supabase.rpc(rpc_append_upvoters, {
            x: currentUser.email,
            row_id: id,
          }),
        ];
        await Promise.all(promises);
      } else if (state == "neutral") {
        setState("upvoted");
        setOffset(1 + offsetDefault);
        const promises = await supabase.rpc(rpc_append_upvoters, {
          x: currentUser.email,
          row_id: id,
        });
      } else {
        setState("neutral");
        setOffset(0 + offsetDefault);
        const promises = await supabase.rpc(rpc_pop_upvoters, {
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
        justifyContent: "flex-start",
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
