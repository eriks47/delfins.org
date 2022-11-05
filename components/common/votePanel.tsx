import { useContext, useState } from "react";
import { supabase } from "../../services/supabaseClient";
import { DolphinContext } from "../../context/DolphinContext";
import { useRouter } from "next/router";

import Upvote from "./upvote";
import Downvote from "./downvote";
import Stack from "@mui/material/Stack";

export default function VotePanel({ id, downvote, upvote }) {
  const [state, setState] = useState("neutral");
  const { currentUser } = useContext(DolphinContext);
  const router = useRouter();

  async function toggleState(element: string) {
    if (element === "downvote") {
      if (state === "downvoted") {
        setState("neutral");
        supabase.rpc("qincrement", { x: 1, row_id: id });
      } else if (state == "neutral") {
        setState("downvoted");
        await supabase.rpc("qincrement", { x: -1, row_id: id });
      } else {
        setState("downvoted");
        await supabase.rpc("qincrement", { x: -2, row_id: id });
      }
    } else {
      if (state === "downvoted") {
        setState("upvoted");
        await supabase.rpc("qincrement", { x: 2, row_id: id });
      } else if (state == "neutral") {
        setState("upvoted");
        await supabase.rpc("qincrement", { x: 1, row_id: id });
      } else {
        setState("neutral");
        await supabase.rpc("qincrement", { x: -1, row_id: id });
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
        isQuestion={true}
        id={id}
      />
      <p style={{ fontSize: "13px", marginTop: "-20px" }}>
        {upvote - downvote} balsis
      </p>
      <Downvote
        onClick={() =>
          currentUser ? toggleState("downvote") : router.push("/login")
        }
        isActive={state == "downvoted"}
        isQuestion={true}
        id={id}
      />
    </Stack>
  );
}
