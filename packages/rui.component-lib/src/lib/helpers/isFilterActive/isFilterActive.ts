import {FilterValues, FilterTypes} from "../../types";

export const isFilterActive = (
  selectedValues: FilterValues,
  allValues: FilterValues,
  filter: FilterTypes | undefined,
) => {
  if (!selectedValues) {
    return false;
  }

  if (filter === "check") {
    const notAllChecked = !(allValues as string[]).every((a: string) =>
      (selectedValues as string[]).some((b: string) => a === b),
    );
    const notNoneChecked = (selectedValues as string[]).length > 0;

    return notAllChecked && notNoneChecked;
  }

  if (filter === "slider") {
    return !(allValues as [number, number]).every((a: number) =>
      (selectedValues as [number, number]).some((b: number) => a === b),
    );
  }

  if (filter === "date") {
    return !(allValues as [string, string]).every((a: string) =>
      (selectedValues as [string, string]).some((b: string) => a === b),
    );
  }

  if (filter === "search") {
    return selectedValues !== "";
  }

  return false;
};
