import { FC } from "react";
interface Props {
    presets: string[];
    open: boolean;
    handleModalOpen: () => void;
    handleAdd: (payload: string) => void;
    handleDelete: (payload: string) => void;
    handleRename: (newName: string, oldName: string) => void;
    handleReorder: (payload: string[]) => void;
}
export declare const StorePresetManager: FC<Props>;
export {};
