import React, {FC, useState, ReactNode, useEffect, MouseEvent} from "react";
import {Select, Divider, Button, Tooltip, message} from "antd";
import {StorePresetManager} from "./storePresetManager";
import {UndoRedo} from "./undoRedo";
import {StoreManagerStyles, ManagePresetsStyles} from "./storeManager.styles";

export interface Props {
  /**
   * All saved settings of the user.
   */
  settingNames: string[];
  /**
   * The selected setting. If some changes happen after the selection, defaultValue = ""
   * @default Default
   */
  defaultValue: string;
  /**
   * Action to undo the last action.
   */
  undo: () => void;
  /**
   * Action to redo the last action.
   */
  redo: () => void;

  selectSetting: (payload: string) => void;
  addSetting: (settingName: string) => void;
  deleteSetting: (settingName: string) => void;
  renameSetting: (newName: string, oldName: string) => void;
  reorderSettings: (payload: string[]) => void;
}

export const StoreManager: FC<Props> = ({
  settingNames,
  undo,
  redo,
  selectSetting,
  addSetting,
  deleteSetting,
  renameSetting,
  reorderSettings,
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [items, setItems] = useState<string[]>(settingNames);
  const [selected, setSelected] = useState<string | undefined>(undefined);

  useEffect(() => {
    setItems(settingNames);
  }, [settingNames]);

  const handleReorder = (payload: string[]) => {
    reorderSettings(payload);
  };

  const handleAdd = (payload: string) => {
    setSelected(undefined);
    addSetting(payload);
  };

  const handleDelete = (payload: string) => {
    setSelected(undefined);
    deleteSetting(payload);
  };

  const handleRename = (newName: string, oldName: string) => {
    setSelected(undefined);
    renameSetting(newName, oldName);
  };

  const handleChange = (item: string) => {
    setSelected(undefined);
    selectSetting(item);
    message.config({
      top: 20,
      duration: 3,
    });
    message.success(`You have set the ${item} setting`);
  };

  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  const handlePreventDefault = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const dropdown = (menu: ReactNode) => (
    <div>
      {menu}
      <Divider style={{margin: "4px 0"}} />
      <ManagePresetsStyles onMouseDown={handlePreventDefault}>
        <Button size="small" type="primary" onClick={handleModalOpen}>
          Manage Settings
        </Button>
      </ManagePresetsStyles>
    </div>
  );

  return (
    <>
      <StoreManagerStyles>
        <UndoRedo undo={undo} redo={redo} />
        <Select
          placeholder="Select setting"
          dropdownRender={dropdown}
          /*  defaultValue={defaultValue} */
          value={selected}
          onChange={handleChange}
        >
          {items.map((item: string) => (
            <Select.Option key={item}>{item}</Select.Option>
          ))}
        </Select>
        <Tooltip title="Add &amp; edit settings">
          <Button shape="circle" icon="plus" onClick={handleModalOpen} />
        </Tooltip>
      </StoreManagerStyles>
      <StorePresetManager
        presets={items}
        open={modalOpen}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        handleRename={handleRename}
        handleReorder={handleReorder}
        handleModalOpen={handleModalOpen}
      />
    </>
  );
};

export default StoreManager;
