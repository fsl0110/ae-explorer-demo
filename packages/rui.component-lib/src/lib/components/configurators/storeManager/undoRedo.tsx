import React, {FC} from "react";
import {Tooltip, Button} from "antd";
import {UndoRedoStyles} from "./undoRedo.styles";

export interface Props {
  undo: () => void;
  redo: () => void;
}

export const UndoRedo: FC<Props> = ({undo, redo}) => (
  <UndoRedoStyles>
    <Tooltip title="Undo">
      <Button shape="circle" icon="undo" onClick={undo} />
    </Tooltip>
    <Tooltip title="Redo">
      <Button shape="circle" icon="redo" onClick={redo} />
    </Tooltip>
  </UndoRedoStyles>
);
