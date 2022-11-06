import Link from "next/link";
import styles from "./Post.module.css";
import { supabase } from "../../services/supabaseClient";

interface PostData {
  id: number;
  author: string;
  title: string;
  content: string;
  answer_count: number;
  views: number;
  downvoters: string[];
  upvoters: string[];
}

export default function Post(params: any) {
  const data: PostData = params.data;

  async function add_view() {
    const a = await supabase.rpc("add_view", { row_id: params.id });
    params.onClick(true);
    console.log(a);
  }

  const rating = data.upvoters.length - data.downvoters.length;
  return (
    <div className={styles.cardPost}>
      <div className={styles.numberPanel}>
        <p className={styles.rating}>{`${rating} ${
          rating === 1 ? "balss" : "balsis"
        }`}</p>
        <p className={styles.answers}>{`${data.answer_count} ${
          data.answer_count === 1 ? "atbilde" : "atbildes"
        }`}</p>
        <p className={styles.views}>{data.views} skatījumi</p>
      </div>
      <div>
        <p className={`${styles.fontMedium} ${styles.colorAccent}`}>
          <Link onClick={add_view} href={`questions/${data.id}`}>
            {data.title}
          </Link>
        </p>
        <p>
          {data.content.slice(0, 300) +
            (data.content.length > 300 ? "..." : "")}
        </p>
        <p>{data.author}</p>
      </div>
    </div>
  );
}
