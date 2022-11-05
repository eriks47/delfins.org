import Tooltip from "@mui/material/Tooltip";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface Props {
  isActive: boolean;
  isQuestion: boolean;
  id: number;
  onClick: () => void;
}

export default function Downvote({ isActive, isQuestion, id, onClick }: Props) {
  const upvoteTooltip = isQuestion
    ? "Jautājums ir nesaprotams un nav noderīgs; Tas neparāda nekādu ieguldījumu"
    : "Šī atbilde nav noderīga";
  return (
    <Tooltip title={upvoteTooltip} placement="right">
      <ArrowDropDownIcon
        style={{ cursor: "pointer", fontSize: "80px", marginTop: "-30px" }}
        fontSize="large"
        onClick={onClick}
        color={isActive ? "primary" : "action"}
      />
    </Tooltip>
  );
}
