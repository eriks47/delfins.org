import styles from "./Nav.module.css";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import { useState } from "react";
import { useRouter } from "next/router";

import { supabase } from "../../services/supabaseClient";

export default function Nav({ changePosts }) {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  async function fullTextSearch(query: string) {
    const { data, error } = await supabase
      .from("questions")
      .select()
      .textSearch("content", query);
    changePosts(data);
    if (error) {
      console.log(error);
    }
  }

  return (
    <ul className={styles.ul}>
      <li className={styles.li}>
        <a href="default.asp">
          <SearchIcon />
        </a>
      </li>
      <li className={styles.li}>
        <a href="default.asp">Home</a>
      </li>
      <li className={styles.li}>
        <a href="news.asp">News</a>
      </li>
      <li className={styles.li}>
        <a href="contact.asp">Contact</a>
      </li>
      <li className={styles.li}>
        <a href="about.asp">About</a>
      </li>
      <li className={styles.in}>
        <Input
          id="input-with-icon-adornment"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") fullTextSearch(`'${searchValue}'`);
          }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </li>
    </ul>
  );
}
