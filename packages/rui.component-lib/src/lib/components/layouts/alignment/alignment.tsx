import React, {FC, ReactNode, HTMLAttributes} from "react";
import {AlignmentStyles} from "./alignment.styles";

export interface Props extends HTMLAttributes<HTMLSpanElement> {
  direction: "column" | "row" | "column-row";
  children: ReactNode | ReactNode[];
}

export const Alignment: FC<Props> = ({direction, children}) => (
  <AlignmentStyles direction={direction}>{children}</AlignmentStyles>
);
