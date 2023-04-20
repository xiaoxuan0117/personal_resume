import * as React from "react";

import { Deco, DecoContent } from "./index.style";

export interface IDecoTextProps {
  decoRef?: React.RefObject<HTMLDivElement>;
  text: string;
  quantity: number;
  left?: string;
  top?: string;
  rotate?: number;
}

export default function DecoText(props: IDecoTextProps) {
  const { decoRef, text, quantity, left, top, rotate } = props;
  const content = Array(quantity).fill(text);
  return (
    <Deco ref={decoRef} left={left} top={top} rotate={rotate}>
      {content.map((item, index) => (
        <DecoContent key={index}>{item}</DecoContent>
      ))}
    </Deco>
  );
}
