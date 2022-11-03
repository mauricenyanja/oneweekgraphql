import { PrismaClient } from '@prisma/client'

import { createServer } from "@graphql-yoga/node";
import { join } from "path";
import { readFileSync } from "fs"
import { Resolvers } from "../../types"

import prisma from "../../lib/prisma"


const typeDefs = readFileSync(join(process.cwd(), "schema.graphql"), {
    encoding: "utf-8",
})
const resolvers:Resolvers = {
    Query: {
      cart: (_, { id }) => {
        return {
          id,
          totalItems: 0,
        };
      },
    },
}
const server = createServer({
    cors: false,
    endpoint: "/api"
    ,
    schema: {
      typeDefs,
      resolvers,
    },
  });

export type GraphQLContext = {
    prisma: PrismaClient;
  };