import Link from "next/link";
import styles from "./Post.module.css";
import { supabase } from "../../services/supabaseClient";

interface PostData {
  id: number;
  author: string;
  title: string;
  content: string;
  upvote: number;
  downvote: number;
  answer_count: number;
  views: number;
}

export default function Post(params: any) {
  const data: PostData = params.data;
  const rating = data.upvote - data.downvote;
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
          <Link
            onClick={async () => {
              const a = await supabase.rpc("add_view", { row_id: params.id });
              params.onClick(true);
              console.log(a);
            }}
            href={`questions/${data.id}`}
          >
            {data.title}
          </Link>
        </p>
        <p>{data.author}</p>
        <p>{data.content.slice(0, 100) + "..."}</p>
      </div>
    </div>
  );
}
