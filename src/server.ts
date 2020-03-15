import * as path from 'path';
import { GraphQLServer } from 'graphql-yoga';
import { makeSchema } from 'nexus';
import { nexusPrismaPlugin } from 'nexus-prisma';

import * as types from './types';

new GraphQLServer({
  schema: makeSchema({
    types,
    plugins: [nexusPrismaPlugin()],
    outputs: {
      typegen: path.join(
        __dirname,
        '../node_modules/@types/nexus-typegen/index.d.ts',
      ),
    },
  }),
}).start(() =>
  console.log(
    `🚀 Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/ts/graphql-sdl-first#3-using-the-graphql-api`,
  ),
);
