import React, {FC} from "react";
import {Tooltip} from "antd";
import {TableCellHighlightStyles} from "./tableCellHighlight.styles";

export interface Props {
  children: string;
  tooltipTitle?: string;
  searchTerm: string;
}

export const TableCellHighlight: FC<Props> = ({tooltipTitle, searchTerm, children}) => {
  const highlighted = children.replace(
    new RegExp(searchTerm, "gi"),
    (match: string) => `<mark>${match}</mark>`,
  );

  if (tooltipTitle) {
    return (
      <TableCellHighlightStyles>
        <Tooltip title={tooltipTitle}>
          <span dangerouslySetInnerHTML={{__html: highlighted}} />
        </Tooltip>
      </TableCellHighlightStyles>
    );
  }

  return <TableCellHighlightStyles dangerouslySetInnerHTML={{__html: highlighted}} />;
};

/** @component */
export default TableCellHighlight;
