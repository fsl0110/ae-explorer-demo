import React, {FC, ReactNode} from "react";
import {TableRowStyles} from "./tableRow.styles";

export interface Props {
  striped?: boolean;
  children: ReactNode | ReactNode[];
}

export const TableRow: FC<Props> = ({striped, children}) => (
  <TableRowStyles striped={striped}>{children}</TableRowStyles>
);

/** @component */
export default TableRow;
