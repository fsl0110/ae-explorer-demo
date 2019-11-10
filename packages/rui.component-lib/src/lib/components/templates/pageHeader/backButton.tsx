import React, {FC} from "react";
import {Button, Tooltip} from "antd";

export interface Props {
  hide?: boolean;
  disabled?: boolean;
  tooltipTitle: string;
}

export const BackButton: FC<Props> = ({hide, disabled, tooltipTitle}) => {
  if (hide) {
    return null;
  }

  return (
    <Tooltip title={tooltipTitle}>
      <Button shape="circle" icon="arrow-left" disabled={disabled} type="primary" ghost={true} />
    </Tooltip>
  );
};
