import React, {FC, useState, useRef, useEffect, ChangeEvent} from "react";
import {Input, Button} from "antd";
import {ErrorMsg} from "../..";
import {AddPresetStyles} from "./addPreset.styles";

export interface Props {
  presets: string[];
  handleAdd: (payload: string) => void;
  handleModalOpen: () => void;
}

export const AddPreset: FC<Props> = ({presets, handleAdd, handleModalOpen}) => {
  // tslint:disable-next-line: no-any
  const inputRef = useRef<any>();
  const [name, setName] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [noCharacter, setNoCharacter] = useState<boolean>(true);
  const alreadyExistsMsg = "This name already exist!";
  const noCharacterMsg = "Please type at least one character!";

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (inputRef.current.state.value[0]) {
      setNoCharacter(false);
    } else {
      setNoCharacter(true);
    }

    if (presets.includes(e.target.value)) {
      setErrorMsg(alreadyExistsMsg);
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    setName(e.target.value);
  };

  const onAddClick = () => {
    if (!inputRef.current.state.value[0]) {
      setNoCharacter(true);
      setErrorMsg(noCharacterMsg);
    } else {
      setName("");
      handleAdd(inputRef.current.state.value);
      handleModalOpen();
    }
  };

  useEffect(() => {
    setErrorMsg("");
    setNoCharacter(false);
  }, [handleModalOpen]);

  return (
    <>
      <AddPresetStyles>
        <Input
          placeholder="Add new setting preset"
          ref={inputRef}
          value={name}
          onChange={handleNameChange}
        />
        <Button type="primary" disabled={disabled} onClick={onAddClick}>
          Add
        </Button>
      </AddPresetStyles>
      {(disabled || noCharacter) && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </>
  );
};
