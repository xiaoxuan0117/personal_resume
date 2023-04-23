import { useEffect, useRef } from "react";

import { ContactWrapper, ContactContent, Title } from "./index.style";
import Button from "../../atoms/Button";
import DecoText from "../../atoms/DecoText";

export interface IContactProps {}

export default function Contact(props: IContactProps) {
  return (
    <ContactWrapper>
      <DecoText text="Xiao-xuan Pan" quantity={1} top="50%" />
      <ContactContent>
        <Title>Contact Me.</Title>
      </ContactContent>
    </ContactWrapper>
  );
}
