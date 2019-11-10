import React, {FC, ReactNode} from "react";
import {Button as AntButton} from "antd";

export interface Props {
  /**
   * Style of the button
   * @default primary
   */
  type: "default" | "primary" | "danger" | "link";

  /**
   * Children of the button.
   */
  children: ReactNode | ReactNode[];
}

export const Button: FC<Props> = ({type, ...rest}) => (
  <AntButton type={type} {...rest}>
    Button
  </AntButton>
);

export default Button;
