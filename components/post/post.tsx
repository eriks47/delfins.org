import Link from "next/link";
import styles from "./Post.module.css";

interface PostData {
  id: number;
  author: string;
  title: string;
  content: string;
  upvote: number;
  downvote: number;
}

export default function Post(params: any) {
  const data: PostData = params.data;
  return (
    <div className={styles.cardPost}>
      <div className={styles.numberPanel}>
        <p className={styles.textSmall}>{data.upvote - data.downvote} balsis</p>
      </div>
      <div>
        <p className={`${styles.fontMedium} ${styles.colorAccent}`}>
          <Link href={`questions/${data.id}`}>{data.title}</Link>
        </p>
        <p>{data.author}</p>
        <p>{data.content.slice(0, 100) + "..."}</p>
      </div>
    </div>
  );
}
