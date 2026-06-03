// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"230302_0215.mdx": () => import("../content/230302_0215.mdx?collection=docs"), "230304_2057.mdx": () => import("../content/230304_2057.mdx?collection=docs"), "230522_0142.mdx": () => import("../content/230522_0142.mdx?collection=docs"), "230731_1000.mdx": () => import("../content/230731_1000.mdx?collection=docs"), "230914_1034.mdx": () => import("../content/230914_1034.mdx?collection=docs"), "index.mdx": () => import("../content/index.mdx?collection=docs"), }),
};
export default browserCollections;