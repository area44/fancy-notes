// @ts-nocheck
import * as __fd_glob_6 from "../content/index.mdx?collection=docs"
import * as __fd_glob_5 from "../content/230914_1034.mdx?collection=docs"
import * as __fd_glob_4 from "../content/230731_1000.mdx?collection=docs"
import * as __fd_glob_3 from "../content/230522_0142.mdx?collection=docs"
import * as __fd_glob_2 from "../content/230304_2057.mdx?collection=docs"
import * as __fd_glob_1 from "../content/230302_0215.mdx?collection=docs"
import { default as __fd_glob_0 } from "../content/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content", {"meta.json": __fd_glob_0, }, {"230302_0215.mdx": __fd_glob_1, "230304_2057.mdx": __fd_glob_2, "230522_0142.mdx": __fd_glob_3, "230731_1000.mdx": __fd_glob_4, "230914_1034.mdx": __fd_glob_5, "index.mdx": __fd_glob_6, });