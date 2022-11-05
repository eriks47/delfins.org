import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface Props {
  isActive: boolean;
  isQuestion: boolean;
  id: number;
  onClick: () => void;
}

export default function Downvote({ isActive, isQuestion, id, onClick }: Props) {
  return (
    <ArrowDropDownIcon
      style={{ cursor: "pointer", fontSize: "80px", marginTop: "-30px" }}
      fontSize="large"
      onClick={onClick}
      color={isActive ? "primary" : "action"}
    />
  );
}
