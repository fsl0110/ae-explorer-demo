import React, {FC, HTMLAttributes} from "react";
import {HeaderGroup} from "../../../../types";
import {CellTopicStyles} from "./cellTopic.styles";
import {getColor} from "../../helpers";

interface Props extends HTMLAttributes<HTMLDivElement> {
  group: HeaderGroup;
  color: string;
}

export const CellTopic: FC<Props> = ({group, color, ...rest}) => (
  <CellTopicStyles color={getColor(group.name, color)}>
    <div {...rest}>{group.name} </div>
    {group.summarizedBy === "Events" ? (
      <>
        <div>n(e)={group.value}</div>
        <div className="subvalue">n(p)={group.subValue}</div>
      </>
    ) : (
      <>
        <div>n(p)={group.value}</div>
        <div className="subvalue">n(e)={group.subValue}</div>
      </>
    )}
  </CellTopicStyles>
);
