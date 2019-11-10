import React, {FC, ReactNode, HTMLAttributes} from "react";
import {Tag, Text} from "..";

export interface Props extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * Tag to define type of the heading.
   * @default h1
   */
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  /**
   * Color of the heading.
   */
  color?: string;

  /**
   * Children of the heading.
   */
  children: ReactNode | ReactNode[];
}

export const Heading: FC<Props> = ({tag = "h1", color, children, ...rest}) => (
  <Tag type={tag} {...rest}>
    <Text color={color}>{children}</Text>
  </Tag>
);

export default Heading;
