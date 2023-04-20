import * as React from "react";
import { SkillWrapper, SkillContent, Left, Right } from "./index.style";
import Image from "next/image";

export interface ISkillProps {
  title: string;
  skillGroup: string[];
}

export default function Skill(props: ISkillProps) {
  const { title, skillGroup } = props;
  return (
    <SkillWrapper>
      <SkillContent>
        <Left>{title}</Left>
        <Right>
          {skillGroup.map((item) => (
            <div key={item} className="skillItem">
              {item},&nbsp;
            </div>
          ))}
        </Right>
      </SkillContent>
    </SkillWrapper>
  );
}
