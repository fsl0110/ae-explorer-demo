import React, {FC, useEffect, useState, HTMLAttributes} from "react";
import {Tooltip, Icon} from "antd";
import produce from "immer";

import {Sort} from "../../../../types";
import {SortButtonStyles} from "./sortButton.styles";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  sortItem: Sort;
  showDNDIcon?: boolean;
  handleChange: (payload: Sort) => void;
  handleDelete: (payload: string) => void;
}

export const SortButton: FC<Props> = ({sortItem: sortItemProp, handleChange, handleDelete}) => {
  const [sortItem, setSortItem] = useState<Sort>(sortItemProp);

  useEffect(() => {
    setSortItem(sortItemProp);
  }, [sortItemProp]);

  const onCloseClick = () => {
    handleDelete(sortItem.attribute);
  };

  const onSortClick = () => {
    const nextSortItem: Sort = produce(sortItem, (draft: Sort) => {
      draft.direction = draft.direction === "asc" ? "desc" : "asc";
    });
    setSortItem(nextSortItem);
    handleChange(nextSortItem);
  };

  return (
    <SortButtonStyles>
      <span onClick={onSortClick} className="sort">
        <Tooltip title={`Change ${sortItem.name} sort order`}>
          <span>{sortItem.name}</span>
        </Tooltip>
        <Tooltip title={`Change ${sortItem.name} sort direction`}>
          <span className="sort-icon">
            <Icon type={sortItem.direction === "asc" ? "arrow-up" : "arrow-down"} />
          </span>
        </Tooltip>
      </span>
      <Tooltip title={`Delete ${sortItem.name} sorting`}>
        <span className="close">
          <Icon type="close" onClick={onCloseClick} />
        </span>
      </Tooltip>
    </SortButtonStyles>
  );
};

export default SortButton;
