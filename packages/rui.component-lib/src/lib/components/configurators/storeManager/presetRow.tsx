import React, {FC} from "react";
import {Button, Typography, Tooltip} from "antd";
import {Confirm} from "../..";
import {PresetRowStyles} from "./presetRow.styles";
const {Text} = Typography;

export interface Props {
  presetName: string;
  edit?: string;
  handleEditOpen: (payload: string) => void;
  handleDelete: (payload: string) => void;
}

export const PresetRow: FC<Props> = ({presetName, edit, handleEditOpen, handleDelete}) => {
  const onOpenClick = () => {
    handleEditOpen(presetName);
  };

  const onDeleteClick = () => {
    handleDelete(presetName);
  };

  return (
    <PresetRowStyles>
      <Text>{presetName}</Text>
      {presetName !== "Default" && (
        <span>
          <Tooltip title="Rename preset">
            <Button
              shape="circle"
              icon="edit"
              size="small"
              disabled={!!edit}
              onClick={onOpenClick}
            />
          </Tooltip>
          <Tooltip title="Delete preset">
            <Confirm title={`Delete preset ${presetName}?`} yesHandler={onDeleteClick}>
              <Button shape="circle" icon="delete" size="small" disabled={!!edit} />
            </Confirm>
          </Tooltip>
        </span>
      )}
    </PresetRowStyles>
  );
};
