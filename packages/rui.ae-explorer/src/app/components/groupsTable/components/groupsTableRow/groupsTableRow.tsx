import React, {FC} from "react";
import {TableCell} from "@dedrr/rui.component-lib";
import {Icon} from "antd";
import {Link} from "react-router-dom";
import {GroupsTableRowStyles} from "./groupsTableRowStyles";
import {getColor} from "../../helpers";
import {ChartDots} from "../chart/chartDots";

export interface Props {
  /**
   * The grouped data of the row.
   */
  group: any;
  /**
   * The colors of the row cell values.
   */
  colors: string[];
  /**
   * Wether the row is expanded.
   */
  expanded?: boolean;
  /**
   * Wether the row is used as an expanded row.
   */
  expandedRow?: boolean;

  bodyCellsView: string;
  searchTerm: string;
  prevalenceRange: [number, number];
  handleExpand?: (payload: string) => void;
}

export const GroupsTableRow: FC<Props> = ({
  colors,
  prevalenceRange,
  group,
  searchTerm,
  expanded,
  expandedRow,
  bodyCellsView,
  handleExpand,
}) => {
  const formatUrl = (text: string) => text.replace(/<\/?[^>]+(>|$)/g, "");

  const onIconClick = () => {
    handleExpand && handleExpand(group.name);
  };

  const setTooltipContent = (item: any, bodyCellsViewParam: string) => {
    if (bodyCellsViewParam === "Percentage") {
      return `${item[1].value}/${item[1].total}`;
    } else {
      return `${item[1].percentage}%`;
    }
  };

  const setCellContent = (item: any, bodyCellsViewParam: string) => {
    if (bodyCellsViewParam === "Percentage") {
      return `${item[1].percentage}%`;
    } else {
      return `${item[1].value}/${item[1].total}`;
    }
  };

  const highlighted = group.name.replace(
    new RegExp(searchTerm, "gi"),
    (match: string) => `<mark>${match}</mark>`,
  );

  return (
    <GroupsTableRowStyles expanded={expanded} expandedRow={expandedRow}>
      <TableCell>
        {!expandedRow && <Icon type="right" onClick={onIconClick} />}
        <Link
          to={`${window.location.pathname}/${formatUrl(group.name)}`}
          dangerouslySetInnerHTML={{__html: highlighted}}
        />
      </TableCell>
      {Object.entries(group.groups).map((item: any, key: number) => (
        <TableCell
          key={item[1].name}
          align="center"
          color={getColor(item[1].name, colors[key])}
          tooltipTitle={setTooltipContent(item, bodyCellsView)}
        >
          {setCellContent(item, bodyCellsView)}
        </TableCell>
      ))}
      <TableCell>
        <ChartDots colors={colors} groupValues={group.groups} prevalenceRange={prevalenceRange} />
      </TableCell>
    </GroupsTableRowStyles>
  );
};
