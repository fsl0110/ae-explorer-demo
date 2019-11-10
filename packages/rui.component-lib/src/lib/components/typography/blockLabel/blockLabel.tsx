import React, {FC, ReactNode, HTMLAttributes} from "react";
import {BlockLabelStyles} from "./blockLabel.styles";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode | ReactNode[];
}

export const BlockLabel: FC<Props> = ({children, ...rest}) => (
  <BlockLabelStyles {...rest}>{children}</BlockLabelStyles>
);
