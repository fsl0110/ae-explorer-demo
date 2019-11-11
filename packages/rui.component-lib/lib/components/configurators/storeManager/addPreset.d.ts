import { FC } from "react";
export interface Props {
    presets: string[];
    handleAdd: (payload: string) => void;
    handleModalOpen: () => void;
}
export declare const AddPreset: FC<Props>;
