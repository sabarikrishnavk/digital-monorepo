import { Module } from '@nestjs/common'; 
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path'
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { CartResolver} from './resolvers/cart';

import { AppController } from './app.controller';
import { AppService } from './app.service'; 

const mocks = {
  Int: () => 6,
  Float: () => 22.1,
  String: () => 'Hello',
};
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      typePaths: ['./apps/order-api/src/schema/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'apps/order-api/src/app/graphql.schema.ts'),
        outputAs: 'class'
      },
      mocks: mocks,
      playground: true
    }), 
  ],
  controllers: [AppController],
  providers: [AppService,CartResolver]
})
export class AppModule {}