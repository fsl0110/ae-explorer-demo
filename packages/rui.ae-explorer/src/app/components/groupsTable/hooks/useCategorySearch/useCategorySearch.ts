import {useMemo} from "react";

export const searchCategories = (searchTerm: string, datas: any) => {
  if (!searchTerm || !searchTerm[1]) {
    return datas;
  }

  let searchResults = [];
  let count = 0;
  if (searchTerm[1]) {
    searchResults = datas.filter((data: any) => {
      let add = false;

      if (data.name.toLowerCase().includes(searchTerm)) {
        count = count + 1;
        add = true;
      }

      data.subCategories = data.subCategories.filter((subData: any) => {
        if (subData.name.toLowerCase().includes(searchTerm)) {
          count = count + 1;
          add = true;
          return subData;
        }
        return undefined;
      });

      return add && data;
    });
  }

  if (searchResults) {
    return searchResults;
  } else {
    return datas;
  }
};

export const useCategorySearch = (searchTerm: string, datas: any) =>
  useMemo(() => searchCategories(searchTerm, datas), [searchTerm, datas]);
