export const getColor = (name: string, colorParam: string) => {
  if (name === "Unassigned") {
    return "#999";
  }
  if (name === "Total") {
    return "black";
  }
  if (name === "Screen Failure") {
    return "#999";
  }
  return colorParam;
};
