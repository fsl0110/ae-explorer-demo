import React, {FC} from "react";
import {Icon} from "antd";
import {SortDirections} from "../../../../types";
import {SortIconStyles} from "./sortIcon.styles";

export interface Props {
  sortDirection?: SortDirections | undefined;
}

export const SortIcon: FC<Props> = ({sortDirection}) => (
  <SortIconStyles sortDirection={sortDirection}>
    <Icon type="caret-up" />
    <Icon type="caret-down" />
  </SortIconStyles>
);
