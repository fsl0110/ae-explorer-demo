import {convertGroups, computeGroupPercentages} from "./convertBodyGroupsHelper";
import {sortGroups} from "./sortGroups";
import {SortColumn, Group, Groups} from "../../types";

export const convertBodySubGroups = (
  category: string,
  headerGroupsObj: Groups,
  sortColumns: SortColumn[],
  countedSubCategories: any,
) => {
  const bodyGroupsSub = Object.entries(countedSubCategories[category]).map((subCategory: any) => {
    const groups: Group[] = convertGroups(subCategory, headerGroupsObj);

    const [groupPercentages] = computeGroupPercentages(groups, 0);

    let bodySubGroups = {
      name: subCategory[0],
      groups: groups,
    };

    // merge groupPercentage object to bodyGroup to enable sorting for all groups
    bodySubGroups = {
      ...bodySubGroups,
      ...groupPercentages,
    };

    return bodySubGroups;
  });

  return sortGroups(bodyGroupsSub, sortColumns);
};
