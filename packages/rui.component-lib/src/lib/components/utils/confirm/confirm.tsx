import React, {FC, ReactNode} from "react";
import {Popconfirm, message} from "antd";

export interface Props {
  title: string;
  yesHandler: () => void;
  noHandler?: () => void;
  children: ReactNode | ReactNode[];
}

export const Confirm: FC<Props> = ({title, yesHandler, noHandler, children, ...rest}) => {
  const confirm = () => {
    message.success("Clicked on Yes");
    yesHandler();
  };

  const cancel = () => {
    message.error("Clicked on No");
    noHandler && noHandler();
  };

  return (
    <Popconfirm
      title={title}
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
      {...rest}
    >
      {children}
    </Popconfirm>
  );
};
