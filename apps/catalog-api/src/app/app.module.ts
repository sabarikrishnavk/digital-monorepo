import { Module } from '@nestjs/common'; 
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path'
// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { SearchResolver} from './resolvers/search';
import {ProductResolver} from './resolvers/product';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ProductAPI} from './datasources/ProductApi';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      typePaths: ['./apps/catalog-api/src/schema/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'apps/catalog-api/src/app/graphql.schema.ts'),
        outputAs: 'class',
      },
      playground: true
    }), 
  ],
  controllers: [AppController],
  providers: [AppService,SearchResolver,ProductResolver,ProductAPI]
})
export class AppModule {}