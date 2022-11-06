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
  const { currentUser } = useContext(DolphinContext);
  const router = useRouter();
  const incrementProcedure = isQuestion ? "qincrement" : "aincrement";
  let voteOffset = 0;
  if (state === "upvoted") voteOffset = 1;
  if (state === "downvoted") voteOffset = -1;
  if (isQuestion) voteOffset = 0;

  useEffect(() => {
    if (!currentUser || !isQuestion) {
      setState("neutral");
      return;
    }
    if (data.upvoters.includes(currentUser.email)) setState("upvoted");
    else if (data.downvoters.includes(currentUser.email)) setState("downvoted");
  }, [currentUser]);

  async function toggleState(element: string) {
    if (element === "downvote") {
      if (state === "downvoted") {
        setState("neutral");
        const promises = [
          supabase.rpc(incrementProcedure, { x: 1, row_id: id }),
          supabase.rpc("pop_array_downvoters", {
            x: currentUser.email,
            row_id: id,
          }),
        ];
        await Promise.all(promises);
      } else if (state == "neutral") {
        setState("downvoted");
        const promises = [
          supabase.rpc(incrementProcedure, { x: -1, row_id: id }),
          supabase.rpc("append_array_downvoters", {
            x: currentUser.email,
            row_id: id,
          }),
        ];
        await Promise.all(promises);
      } else {
        setState("downvoted");
        const promises = [
          supabase.rpc(incrementProcedure, { x: -2, row_id: id }),
          supabase.rpc("append_array_downvoters", {
            x: currentUser.email,
            row_id: id,
          }),
          supabase.rpc("pop_array_downvoters", {
            x: currentUser.email,
            row_id: id,
          }),
        ];
        await Promise.all(promises);
      }
    } else {
      if (state === "downvoted") {
        setState("upvoted");
        const promises = [
          supabase.rpc(incrementProcedure, { x: 2, row_id: id }),
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
        const promises = [
          supabase.rpc(incrementProcedure, { x: 1, row_id: id }),
          supabase.rpc("append_array_upvoters", {
            x: currentUser.email,
            row_id: id,
          }),
        ];
        await Promise.all(promises);
      } else {
        setState("neutral");
        const promises = [
          supabase.rpc(incrementProcedure, { x: -1, row_id: id }),
          supabase.rpc("pop_array_upvoters", {
            x: currentUser.email,
            row_id: id,
          }),
        ];
        await Promise.all(promises);
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
          currentUser ? toggleState("upvote") : router.push("/login")
        }
        isActive={state === "upvoted"}
        isQuestion={isQuestion}
        id={id}
      />
      <p style={{ fontSize: "13px", marginTop: "-20px" }}>
        {upvote - downvote + voteOffset} balsis
      </p>
      <Downvote
        onClick={() =>
          currentUser ? toggleState("downvote") : router.push("/login")
        }
        isActive={state == "downvoted"}
        isQuestion={isQuestion}
        id={id}
      />
    </Stack>
  );
}
