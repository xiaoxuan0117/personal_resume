import * as React from "react";

import { Deco, DecoContent } from "./index.style";

export interface IDecoTextProps {
  decoRef?: React.RefObject<HTMLDivElement>;
  text: string;
  quantity: number;
  from: string;
  top?: string;
}

export default function DecoText(props: IDecoTextProps) {
  const { decoRef, text, quantity, from, top } = props;
  const content = Array(quantity).fill(text);
  return (
    <Deco ref={decoRef} from={from} top={top}>
      {content.map((item, index) => (
        <DecoContent key={index}>{item}</DecoContent>
      ))}
    </Deco>
  );
}
