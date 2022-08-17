import { ReactNode } from "react";

interface ICard {
  className?: string;
  children?: ReactNode | ReactNode[];
}
export const Card = ({ className, children }: ICard) => {
  return <div className={`Card ${className}`}>{children}</div>;
};
