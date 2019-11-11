import { FC } from "react";
export interface Props {
    undo: () => void;
    redo: () => void;
}
export declare const UndoRedo: FC<Props>;
