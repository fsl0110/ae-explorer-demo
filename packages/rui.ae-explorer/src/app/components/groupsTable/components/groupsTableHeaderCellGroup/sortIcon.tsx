import React, {FC, HTMLAttributes} from "react";
import {SortDirection} from "../../../../types";
import {Icon} from "antd";

import {SortIconStyles} from "./sortIcons.styles";

export interface Props extends HTMLAttributes<HTMLSpanElement> {
  sortDirection?: SortDirection;
}

export const SortIcon: FC<Props> = ({sortDirection}) => (
  <SortIconStyles sortDirection={sortDirection}>
    <Icon type="caret-up" />
    <Icon type="caret-down" />
  </SortIconStyles>
);
