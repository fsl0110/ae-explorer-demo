import React, {FC, useState, ChangeEvent} from "react";
import {Button, Input, Tooltip} from "antd";
import {Confirm, ErrorMsg} from "../..";
import {PresetRowEditStyles} from "./presetRowEdit.styles";

interface Props {
  presetName: string;
  presets: string[];
  handleChangedName: (newName: string, oldName: string) => void;
  handleEditClose: () => void;
}

export const PresetRowEdit: FC<Props> = ({
  presetName,
  presets,
  handleChangedName,
  handleEditClose,
}) => {
  const [newName, setNewName] = useState<string>(presetName);
  const [disabled, setDisabled] = useState<boolean>(false);
  const msg = "This name already exists!";

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (presets.includes(e.target.value)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    setNewName(e.target.value);
  };

  const handleYes = () => {
    handleChangedName(newName, presetName);
  };

  const handleEdit = () => {
    handleEditClose();
  };

  return (
    <>
      <PresetRowEditStyles>
        <Input value={newName} size="small" onChange={handleNameChange} />
        <span>
          <Tooltip title="Save new name">
            <Confirm title={`Rename preset ${presetName} to ${newName}?`} yesHandler={handleYes}>
              <Button shape="circle" icon="save" size="small" disabled={disabled} />
            </Confirm>
          </Tooltip>
          <Tooltip title="Close edit mode">
            <Button shape="circle" icon="close" size="small" onClick={handleEdit} />
          </Tooltip>
        </span>
      </PresetRowEditStyles>
      {disabled && <ErrorMsg>{msg}</ErrorMsg>}
    </>
  );
};
