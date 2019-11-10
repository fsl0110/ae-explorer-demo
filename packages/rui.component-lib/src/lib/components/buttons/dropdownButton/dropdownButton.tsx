import React, {FC, ReactNode, HTMLAttributes, useState} from "react";
import {Button, Dropdown, Tooltip, Menu} from "antd";
import {MenuStyles} from "./dropdownButton.styles";

interface Props extends HTMLAttributes<HTMLDivElement> {
  hide?: boolean;
  disabled?: boolean;
  trigger?: "click" | "hover";
  iconName: string;
  tooltipTitle: string;
  hideOnContentClick: boolean;
  children: ReactNode | ReactNode[];
}

export const DropdownButton: FC<Props> = ({
  hide,
  disabled,
  trigger = "click",
  iconName,
  tooltipTitle,
  hideOnContentClick,
  children,
  ...rest
}) => {
  const [dropDownOpen, setDropdownOpen] = useState<boolean>(false);

  const handleVisibilityChange = (visible: boolean) => {
    setDropdownOpen(visible);
  };

  const menu = (
    <Menu>
      <MenuStyles>{children}</MenuStyles>
    </Menu>
  );

  if (hide) {
    return null;
  }

  return (
    <div {...rest}>
      {hideOnContentClick ? (
        <Dropdown overlay={menu} trigger={[trigger]}>
          <Tooltip title={tooltipTitle}>
            <Button shape="circle" icon={iconName} disabled={disabled} />
          </Tooltip>
        </Dropdown>
      ) : (
        <Dropdown
          overlay={menu}
          trigger={[trigger]}
          visible={dropDownOpen}
          onVisibleChange={handleVisibilityChange}
        >
          <Tooltip title={tooltipTitle}>
            <Button shape="circle" icon={iconName} disabled={disabled} />
          </Tooltip>
        </Dropdown>
      )}
    </div>
  );
};

export default DropdownButton;
