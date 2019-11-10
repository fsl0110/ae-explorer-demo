import React, {FC, useEffect, useState} from "react";
import produce from "immer";
import _ from "lodash";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DroppableProvided,
  DropResult,
} from "react-beautiful-dnd";
import {SortButton} from "./sortButton";
import {BlockLabel} from "../../..";
import {Sort} from "../../../../types";
import {SortButtonsStyles} from "./sortButtons.styles";

export interface Props {
  label?: string;
  sort: Sort[];
  handleChange: (payload: Sort[]) => void;
}

export const SortButtons: FC<Props> = ({sort: sortProp, label, handleChange}) => {
  const [sort, setSort] = useState<Sort[]>(sortProp);

  useEffect(() => {
    setSort(sortProp);
  }, [sortProp]);

  const handleSortChange = (payload: Sort) => {
    const index = sort.findIndex((x: Sort) => x.attribute === payload.attribute);
    const nextSort: Sort[] = produce(sort, (draft: Sort[]) => {
      draft[index] = payload;
    });
    setSort(nextSort);
    handleChange(nextSort);
  };

  const handleSortDelete = (payload: string) => {
    const nextSort: Sort[] = produce(sort, (draft: Sort[]) => {
      _.remove(draft, {
        attribute: payload,
      });
    });
    setSort(nextSort);
    handleChange(nextSort);
  };

  const reorder = (items: Sort[], startIndex: number, endIndex: number) => {
    const result: Sort[] = Array.from(items);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result: DropResult) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    const reorderedValues: Sort[] = reorder(sort, result.source.index, result.destination.index);
    setSort(reorderedValues);
    handleChange(reorderedValues);
  };

  return (
    <SortButtonsStyles>
      {label && sort.length && <BlockLabel>{label}</BlockLabel>}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided: DroppableProvided) => (
            <div ref={provided.innerRef}>
              {sort.map((item, key: number) => (
                <Draggable key={item.attribute} draggableId={item.attribute} index={key}>
                  {(providedDraggable) => (
                    <div
                      ref={providedDraggable.innerRef}
                      {...providedDraggable.draggableProps}
                      {...providedDraggable.dragHandleProps}
                    >
                      <SortButton
                        key={item.attribute}
                        sortItem={item}
                        handleChange={handleSortChange}
                        handleDelete={handleSortDelete}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </SortButtonsStyles>
  );
};
