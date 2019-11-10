import React, {FC, ReactNode, HTMLAttributes} from "react";
import {Tooltip} from "antd";
import {TableCellStyles} from "./tableCell.styles";

export interface Props extends HTMLAttributes<HTMLTableHeaderCellElement> {
  children?: ReactNode | ReactNode[];
  tooltipTitle?: string;
  color?: string;
  align?: "center";
}

export const TableCell: FC<Props> = ({tooltipTitle, color, align, children}) => {
  if (tooltipTitle) {
    return (
      <TableCellStyles color={color} align={align}>
        <Tooltip title={tooltipTitle}>{children}</Tooltip>
      </TableCellStyles>
    );
  }

  return <TableCellStyles color={color}>{children}</TableCellStyles>;
};

/** @component */
export default TableCell;
