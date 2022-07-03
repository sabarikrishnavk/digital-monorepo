import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import {ApolloServer ,gql } from 'apollo-server-express';
import * as request from 'supertest'; 

// For clarity in this example we included our typeDefs and resolvers above our test,
// but in a real world situation you'd be importing these in from different files
const typeDefs = gql`
  type Query {
    hello(name: String): String!
  }
`;
const mocks = {
  Int: () => 6,
  Float: () => 22.1,
  String: () => 'Hello',
};
const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello`,
  },
};

it('returns hello with the provided name', async () => {
  const testServer = new ApolloServer({
    typeDefs,
    resolvers,
    mocks
  });

  const result = await testServer.executeOperation({
    query: 'query SayHelloWorld($name: String) { hello(name: $name) }',
    variables: { name: 'world' },
  });

  expect(result.errors).toBeUndefined();
  expect(result.data?.hello).toBe('Hello');
});