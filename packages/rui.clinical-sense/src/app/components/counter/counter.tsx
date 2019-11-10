import React, {FC} from "react";
import {Button} from "antd";
import {CounterStyles} from "./counter.styles";

interface Props {
  value: any;
  handleIncrement: () => void;
  handleDecrement: () => void;
  handleUndo: () => void;
  handleRedo: () => void;
}

export const Counter: FC<Props> = ({
  value,
  handleIncrement,
  handleDecrement,
  handleUndo,
  handleRedo,
}) => (
  <CounterStyles>
    Clicked: {value} times <Button onClick={handleIncrement}>+</Button>&nbsp;
    <Button onClick={handleDecrement}>-</Button>&nbsp;
    <Button onClick={handleUndo}>undo</Button>&nbsp;
    <Button onClick={handleRedo}>redo</Button>
  </CounterStyles>
);
