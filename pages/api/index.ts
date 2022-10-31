import { createServer } from "@graphql-yoga/node";
import { join } from "path";
import { readFileSync } from "fs";

const server = createServer();
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
export default server;