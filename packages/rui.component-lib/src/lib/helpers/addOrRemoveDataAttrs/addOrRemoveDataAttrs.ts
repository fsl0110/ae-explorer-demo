import _ from "lodash";
import produce from "immer";
import {Data} from "../../types";

export const addOrRemoveDataAttrs = (currentAttrs: string[], data: Data[]) =>
  produce(data, (draft: Data[]) => {
    draft.forEach((props: Data) => {
      currentAttrs.forEach((attribute: string) => {
        // tslint:disable-next-line: no-dynamic-delete
        delete props[attribute];
      });
    });
    return draft;
  });
