import Link from "next/link";

interface Props {
  content: string;
  size: string;
  targetPath: string;
}

export default function ButtonCta(props: Props) {
  return (
    <Link href={props.targetPath}>
      <button
        style={{
          color: "#ffffff",
          backgroundColor: "#0a95ff",
          padding: "8px 10px",
          fontSize: "13px",
          cursor: "pointer",
          border: "none",
          borderRadius: "2px",
        }}
      >
        {props.content}
      </button>
    </Link>
  );
}
