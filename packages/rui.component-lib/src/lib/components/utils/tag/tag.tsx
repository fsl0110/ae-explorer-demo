import React, {FC, ReactNode, HTMLAttributes} from "react";

export interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode | ReactNode[];
  /**
   * Define a HTML-Tag to wrap the children(s)
   */
  type: keyof JSX.IntrinsicElements;
}

export const Tag: FC<Props> = ({type, className, children, ...rest}) =>
  React.createElement(type, {className, ...rest}, children);

export default Tag;
