import * as React from "react";
import { ShadowInclinedLine } from "./index.style";

export interface IShadowInclinedProps {
  thick: boolean;
}

export default function ShadowInclined(props: IShadowInclinedProps) {
  return <ShadowInclinedLine thick={props.thick} />;
}
