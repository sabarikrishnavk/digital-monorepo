

# DigitalMonorepo
Setup 
--
Install nx npm library
To create new workspace (one time mono repo setup)

```
npx create-nx-workspace@latest
    workspace : digital-monorepo
    default > apps

```

Nest JS - Graphql APIs
---

```
npm install -D @nrwl/nest @nestjs/graphql apollo-server-express graphql-tools graphql @nestjs/apollo ts-morph supertest
```
```
npm install -D @elastic/elasticsearch graphql-tools apollo-datasource-rest @nestjs/elasticsearch
```

  Customer API : Login/Registration/Loyalty/Profile information : Port : 3001
  ---

  ```
    nx g @nrwl/nest:app customer-api
    nx:serve customer-api

  ``` 
  ---
  Catalog API : Search /Browse/Product listing/ Product details (Inventory/Price/Promotion) : Port : 3002
  --- 
  ```
  nx g @nrwl/nest:app catalog-api
  ```
  ---
  Marketing API : Content Spots/ Fragments Information : Port : 3003
  ---

  ```
  nx g @nrwl/nest:app marketing-api 
  ```
  ---
  Order API : Add/View/Delete Cart , Create/Copy/Edit Order , Fulfillment Events : Port : 3004
  ---
  ```
  nx g @nrwl/nest:app order-api
  ```
  ---
  Search API : Search elastic index for product / inventory /storelocator : Port : 3006
  ---
  ```
  nx g @nrwl/nest:app search-api
  ```
TODO : 
1. Create schema.graphql for each <module>-api
2. Update the path for auto-schema generation in digital-monorepo/apps/<modules>-api/src/app/app.module.ts
3. Need to add JWT Authentication Setup for order /customer api

Gateway API : 
---
  ```
  npm install -D @apollo/federation @apollo/subgraph @apollo/gateway 
  nx g @nrwl/nest:app marketing-api
  
  ```
--- 
Next JS - UI  setup
---

```
npm install -D styled-jsx @types/styled-jsx styled-jsx-plugin-sass node-sass-middleware sass 
npm install -D @nrwl/nest
nx g @nrwl/next:app customercare-ui

nx g @nrwl/next:lib ecom-ui-components
```
>> css

Elastic instance:
----
```
docker-compose -f docker-db-es-redis.yml up
```
Create index based on es-mapping and load  data into index
----
```
cd setup
 
npm run setup:product
 
npm run setup:inventory

npm run setup:useraction

```

join the indexes and create an aliases for search(bigdata):
```
POST /_aliases
{
  "actions": [
    {
      "add": {
        "index": "product",
        "alias": "bigdata"
      }
      
    },{ 
      "add": {
        "index": "inventory",
        "alias": "bigdata"
      }
    },{
      "add": {
        "index": "useraction",
        "alias": "bigdata" 
      }
    }
  ]
}
````

http://localhost:9200/product/_search 
<br>
http://localhost:9200/useraction/_search 
<br>
http://localhost:9200/inventory/_search

--Open API to graphql
https://github.com/IBM/openapi-to-graphql

This project was generated using [Nx](https://nx.dev).

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`
 

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@digital-monorepo/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.



## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
