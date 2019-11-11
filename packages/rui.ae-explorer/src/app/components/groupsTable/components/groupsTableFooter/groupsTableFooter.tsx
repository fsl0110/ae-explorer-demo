import React, {FC} from "react";
import {TableCell} from "@dedrr/rui.component-lib";
import {FooterStyles} from "./groupsTableFooterStyles";
import {GroupedValue} from "../../../../types";
import {getColor} from "../../helpers";

export interface Props {
  colors: string[];
  groups: GroupedValue[];
}

export const GroupsTableFooter: FC<Props> = ({groups, colors}) => (
  <FooterStyles>
    <tr>
      <TableCell align="center" tooltipTitle="All">
        All
      </TableCell>
      {groups.map((group, key) => (
        <TableCell
          key={group.name}
          align="center"
          color={getColor(group.name, colors[key])}
          tooltipTitle={`${group.value}/${group.total}`}
        >
          {`${group.percentage}%`}
        </TableCell>
      ))}
      <TableCell />
    </tr>
  </FooterStyles>
);
