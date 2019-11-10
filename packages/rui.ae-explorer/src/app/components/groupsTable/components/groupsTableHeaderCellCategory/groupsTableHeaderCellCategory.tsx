import React, {FC, ReactNode, useState, useRef, HTMLAttributes} from "react";
import {Icon, Dropdown} from "antd";
import {dropdownMenu} from "./dropdownMenu";
import {HeaderCellStyles} from "./groupsTableHeaderCellCategory.styles";
import {Filter} from "../../../../types";

export interface Props extends HTMLAttributes<HTMLTableCellElement> {
  rowSpan?: number;
  filters: Filter[];
  children: ReactNode | ReactNode[];
  searchTerm: string;
  handleSearch: (payload: string) => void;
}

export const GroupsTableHeaderCellCategory: FC<Props> = ({
  rowSpan,
  filters,
  children,
  searchTerm,
  handleSearch,
}) => {
  const el = useRef<HTMLDivElement>(null);
  const [dropdownNode, setDropdownNode] = useState(el.current ? el.current : undefined);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  /*   const column = {attribute: children, name: children, filter: "search"}; */

  const handleVisibilityChange = (visible: boolean) => {
    setDropdownOpen(visible);
    const dropdown = el.current ? el.current : undefined;
    setDropdownNode(dropdown);
  };

  const getContainer = () => dropdownNode || document.body;

  return (
    <HeaderCellStyles
      filterActive={!!searchTerm && !!searchTerm[0]}
      dropdownVisibilty={dropdownOpen}
      rowSpan={rowSpan}
    >
      <div className="cell">
        <span className="cell-item" role="button">
          {children}
        </span>
        {filters.length ? (
          <div className="cell-handler">
            <Dropdown
              overlay={dropdownMenu(searchTerm, handleSearch)}
              trigger={["click"]}
              placement="bottomRight"
              onVisibleChange={handleVisibilityChange}
              visible={dropdownOpen}
              getPopupContainer={getContainer}
            >
              <span className="filter-btn" role="button">
                <Icon type="search" />
              </span>
            </Dropdown>
          </div>
        ) : null}
      </div>
      <div ref={el} className="dropdown" />
    </HeaderCellStyles>
  );
};
