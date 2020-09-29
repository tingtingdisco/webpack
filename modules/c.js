import { staticImportedByABC } from './staticImportedByABC';
import { usedLeaf, unusedLeaf } from './tree';
import throttle from 'lodash/throttle';

export const c = () => {
  staticImportedByABC();
  usedLeaf();
};
