import React, {FC, ReactNode} from "react";
import {Typography} from "antd";
const {Text} = Typography;

export interface Props {
  children: ReactNode | ReactNode[];
}
export const ErrorMsg: FC<Props> = ({children}) => (
  <div>
    <Text type="danger">{children}</Text>
  </div>
);
