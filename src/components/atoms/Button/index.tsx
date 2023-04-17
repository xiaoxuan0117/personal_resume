import * as React from "react";
import { ButttonWrapper, ButtonContent } from "./index.style";

export interface IButtonProps {
  label: string;
}

export function Button(props: IButtonProps) {
  const { label } = props;
  return (
    <ButttonWrapper>
      <ButtonContent>{label}</ButtonContent>
    </ButttonWrapper>
  );
}
