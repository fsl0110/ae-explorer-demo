import {Data} from "../../types";

export const reorderDataAttrs = (orderedAttrs: string[], data: Data[]) => {
  let newData: Data[] = [];
  data.forEach((obj: Data) => {
    let newObj = {};
    orderedAttrs.forEach((attribute: string) => {
      newObj = {
        ...newObj,
        [attribute]: obj[attribute],
      };
    });

    newData = [...newData, newObj];
  });
  return newData;
};
