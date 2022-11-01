
import { createServer } from "@graphql-yoga/node";
import { join } from "path";
import { readFileSync } from "fs"
import { Resolvers } from "../../types";

const typeDefs = readFileSync(join(process.cwd(), "schema.graphql"), {
    encoding: "utf-8",
})
const resolvers = {
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

export default server;