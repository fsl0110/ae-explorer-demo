import React, {FC, useState} from "react";
import {Modal} from "antd";
import v4 from "uuid/v4";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DroppableProvided,
  DropResult,
} from "react-beautiful-dnd";
import {PresetRow} from "./presetRow";
import {PresetRowEdit} from "./presetRowEdit";
import {AddPreset} from "./addPreset";
import {PresetContainerStyles} from "./storePresetManager.styles";

interface Props {
  presets: string[];
  open: boolean;
  handleModalOpen: () => void;
  handleAdd: (payload: string) => void;
  handleDelete: (payload: string) => void;
  handleRename: (newName: string, oldName: string) => void;
  handleReorder: (payload: string[]) => void;
}

export const StorePresetManager: FC<Props> = ({
  presets,
  open,
  handleAdd,
  handleDelete,
  handleRename,
  handleReorder,
  handleModalOpen,
}) => {
  const [edit, setEdit] = useState<string>();

  const handleEditOpen = (preset: string) => {
    setEdit(preset);
  };

  const handleEditClose = () => {
    setEdit("");
  };

  const handleChangedName = (newName: string, oldName: string) => {
    setEdit("");
    handleRename(newName, oldName);
  };

  const reorder = (items: string[], startIndex: number, endIndex: number) => {
    const result: string[] = Array.from(items);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: DropResult) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const reorderdValues: string[] = reorder(
      presets,
      result.source.index,
      result.destination.index,
    );
    handleReorder(reorderdValues);
  };

  return (
    <Modal
      title="Settings Manager"
      visible={open}
      footer={false}
      width={300}
      centered={true}
      onCancel={handleModalOpen}
    >
      <AddPreset presets={presets} handleAdd={handleAdd} handleModalOpen={handleModalOpen} />

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="vertical">
          {(provided: DroppableProvided) => (
            <PresetContainerStyles ref={provided.innerRef}>
              {presets.map((preset: string, index: number) =>
                edit !== preset ? (
                  <Draggable key={preset} draggableId={preset} index={index}>
                    {(providedDraggable) => (
                      <div
                        key={preset}
                        ref={providedDraggable.innerRef}
                        {...providedDraggable.draggableProps}
                        {...providedDraggable.dragHandleProps}
                      >
                        <PresetRow
                          key={v4()}
                          presetName={preset}
                          edit={edit}
                          handleEditOpen={handleEditOpen}
                          handleDelete={handleDelete}
                        />
                      </div>
                    )}
                  </Draggable>
                ) : (
                  <Draggable key={preset} draggableId={preset} index={index}>
                    {(providedDraggable) => (
                      <div
                        key={preset}
                        ref={providedDraggable.innerRef}
                        {...providedDraggable.draggableProps}
                        {...providedDraggable.dragHandleProps}
                      >
                        <PresetRowEdit
                          key={v4()}
                          presetName={preset}
                          presets={presets}
                          handleChangedName={handleChangedName}
                          handleEditClose={handleEditClose}
                        />
                      </div>
                    )}
                  </Draggable>
                ),
              )}
            </PresetContainerStyles>
          )}
        </Droppable>
      </DragDropContext>
    </Modal>
  );
};
