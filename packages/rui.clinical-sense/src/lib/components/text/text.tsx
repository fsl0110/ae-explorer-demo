import React, {FC, ReactNode} from "react";
import {TextStyles} from "./text.styles";

export interface Props {
  /**
   * Color of the text.
   * @default #fff
   */
  color?: string;

  /**
   * Children of the text.
   */
  children: ReactNode | ReactNode[];
}
export const Text: FC<Props> = ({...rest}) => <TextStyles {...rest} />;
