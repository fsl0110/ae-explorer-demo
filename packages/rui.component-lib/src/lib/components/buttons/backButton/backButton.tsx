import React, {FC} from "react";
import {Button} from "antd";

export interface Props {
  hide?: boolean;
  disabled?: boolean;
  tooltipTitle?: string;
}

export const BackButton: FC<Props> = ({hide, disabled}) => {
  if (hide) {
    return null;
  }

  return (
    <Button shape="circle" icon="arrow-left" disabled={disabled} type="primary" ghost={true} />
  );
};
