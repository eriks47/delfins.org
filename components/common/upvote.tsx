import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

interface Props {
  isActive: boolean;
  isQuestion: boolean;
  id: number;
  onClick: () => void;
}

export default function Upvote({ isActive, isQuestion, id, onClick }: Props) {
  return (
    <ArrowDropUpIcon
      style={{
        cursor: "pointer",
        fontSize: "80px",
        marginTop: "-10px",
      }}
      fontSize="small"
      onClick={onClick}
      color={isActive ? "primary" : "action"}
    />
  );
}
