import { staticImportedByABC } from './staticImportedByABC';
import { usedLeaf, unusedLeaf } from './tree';
import get from 'lodash/get';
import throttle from 'lodash/throttle';
import { v4 } from 'uuid';
import { join } from 'lodash-es';

export const a = () => {
  staticImportedByABC();
  usedLeaf();
};
