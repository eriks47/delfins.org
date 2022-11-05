import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Tooltip from "@mui/material/Tooltip";

interface Props {
  isActive: boolean;
  isQuestion: boolean;
  id: number;
  onClick: () => void;
}

export default function Upvote({ isActive, isQuestion, id, onClick }: Props) {
  const upvoteTooltip = isQuestion
    ? "Šis jautājums jautājums ir saprotams, precīzs un parāda personīgu ieguldījumu"
    : "Šī atbilde ir noderīga";
  return (
    <Tooltip
      title="Šis jautājums jautājums ir saprotams, precīzs un parāda personīgu ieguldījumu"
      placement="right"
    >
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
    </Tooltip>
  );
}
