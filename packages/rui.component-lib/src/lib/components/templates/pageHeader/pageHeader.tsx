import React, {FC, HTMLAttributes, ReactNode} from "react";
import {PageHeaderStyles} from "./pageHeader.styles";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode | ReactNode[];
}

export const PageHeader: FC<Props> = ({children, ...rest}) => (
  <PageHeaderStyles {...rest}>{children}</PageHeaderStyles>
);
