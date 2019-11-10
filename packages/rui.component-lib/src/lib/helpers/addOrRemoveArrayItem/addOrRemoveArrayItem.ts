export const addOrRemoveArrayItem = <T>(array: T[], value: T): T[] => {
  if (array.includes(value)) {
    return array.filter((item) => item !== value);
  } else {
    return [...array, value];
  }
};
