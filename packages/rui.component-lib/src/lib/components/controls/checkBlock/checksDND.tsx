import React, {FC, useState, MouseEvent} from "react";
import {Checkbox} from "antd";
import {Alignment} from "../..";
import {CheckboxesStyles} from "./checkBlock.styles";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DroppableProvided,
  DropResult,
} from "react-beautiful-dnd";

export interface Props {
  /**
   * Select the alignment of the label and the checkboxes.
   * @default row
   */
  direction?: "row" | "column" | "column-row";
  /**
   * Wether to hide the drag and drop icon if DND is enabled.
   */
  hideDNDIcons?: boolean;
  /**
   * Wether to disable all checkboxes.
   */
  disabled?: boolean;
  /**
   * All checkable values.
   */
  allValues: string[];
  /**
   * Current checked values.
   */
  checked: string[];
  /**
   * Returns the current checked value.
   */
  onChange: (e: MouseEvent<HTMLInputElement>) => void;
  /**
   * Returns the reordered allValues.
   */
  getAllValuesReordered?: (payload: string[]) => void;
}

export const ChecksDND: FC<Props> = ({
  allValues,
  hideDNDIcons,
  checked,
  direction,
  disabled,
  onChange,
  getAllValuesReordered,
}) => {
  const [values, setValues] = useState(allValues);

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

    const reorderdValues: string[] = reorder(values, result.source.index, result.destination.index);
    setValues(reorderdValues);
    getAllValuesReordered && getAllValuesReordered(reorderdValues);
  };

  const dropDirection = direction === "column" ? "vertical" : "horizontal";

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" direction={dropDirection}>
        {(provided: DroppableProvided) => (
          <CheckboxesStyles ref={provided.innerRef} direction={direction}>
            {values.map((item, key: number) =>
              checked.includes(item) ? (
                <Draggable key={item} draggableId={item} index={key}>
                  {(providedDraggable) => (
                    <div
                      key={item}
                      ref={providedDraggable.innerRef}
                      {...providedDraggable.draggableProps}
                      {...providedDraggable.dragHandleProps}
                    >
                      <Alignment direction="row">
                        <Checkbox
                          key={item}
                          checked={checked.includes(item)}
                          value={item}
                          disabled={disabled}
                          onClick={onChange}
                        >
                          {item}
                        </Checkbox>
                      </Alignment>
                    </div>
                  )}
                </Draggable>
              ) : (
                <Checkbox
                  key={item}
                  className="unchecked"
                  checked={checked.includes(item)}
                  value={item}
                  disabled={disabled}
                  onClick={onChange}
                >
                  {item}
                </Checkbox>
              ),
            )}
          </CheckboxesStyles>
        )}
      </Droppable>
    </DragDropContext>
  );
};
