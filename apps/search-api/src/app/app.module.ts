import { Module } from '@nestjs/common'; 
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path'
// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { SearchResolver} from './resolvers/search'; 

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ElasticsearchModule} from './elasticsearch.module';
import {ElasticSearchAPI} from './datasources/elasticsearch';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      typePaths: ['./apps/search-api/src/schema/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'apps/search-api/src/app/graphql.schema.ts'),
        outputAs: 'class',
      },
      playground: true
    }), 
    ElasticsearchModule
  ],
  controllers: [AppController],
  providers: [AppService,SearchResolver,ElasticSearchAPI]
})
export class AppModule {}