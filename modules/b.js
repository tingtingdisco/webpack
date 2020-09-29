import { staticImportedByABC } from './staticImportedByABC';
import { usedLeaf, unusedLeaf } from './tree';
import get from 'lodash/get';

export const b = () => {
  staticImportedByABC();
  usedLeaf();
};
