import { staticImportedByABC } from './staticImportedByABC';
import { usedLeaf, unusedLeaf } from './tree';
import get from 'lodash/get';
import throttle from 'lodash/throttle';

export const a = () => {
  staticImportedByABC();
  usedLeaf();
};
