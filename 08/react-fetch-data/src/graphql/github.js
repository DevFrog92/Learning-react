import { GraphQLClient } from "graphql-request";


export const client = new GraphQLClient(
  'https://api.github.com/graphql',
  {
    headers: {
      Authorization: `Bearer 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`
    }
  }
);
