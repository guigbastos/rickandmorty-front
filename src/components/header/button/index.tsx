import { Link } from "react-router";
import { StyledButton } from "./styles";

interface ButtonProps {
  link: string;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ link, text }: ButtonProps) => {
  return (
    <>
      <StyledButton as={Link} to={link}>
        {text}
      </StyledButton>
    </>
  );
};
