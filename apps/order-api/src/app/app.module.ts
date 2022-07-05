import { Module } from '@nestjs/common'; 
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CartResolver} from './resolvers/cart';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./apps/order-api/src/schema/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'apps/order-api/src/app/graphql.schema.ts'),
        outputAs: 'class',
      },
      playground: true
    }), 
  ],
  controllers: [AppController],
  providers: [AppService,CartResolver]
})
export class AppModule {}