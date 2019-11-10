import React, {FC} from "react";
import {ContainerStyles, BulletStyles} from "./groupsValueBullets.styles";
import {Tooltip} from "antd";
import {getColor} from "../../helpers";

export interface Props {
  colors: string[];
  groupValues: any;
}

export const GroupsValueBullets: FC<Props> = ({groupValues, colors}) => {
  console.log("groupValues", groupValues);
  return (
    <ContainerStyles>
      {groupValues.map((value: any, key: number) => (
        <Tooltip key={value.name} title={`${value.name}: ${value.percentage}%`}>
          <BulletStyles color={getColor(value.name, colors[key])} value={value.percentage} />
        </Tooltip>
      ))}
    </ContainerStyles>
  );
};
