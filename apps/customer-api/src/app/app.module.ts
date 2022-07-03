import { Module } from '@nestjs/common'; 
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CustomerResolver} from './customer.resolver';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'apps/customer-api/src/app/graphql.schema.ts'),
        outputAs: 'class',
      },
      playground: true
    }), 
  ],
  controllers: [AppController],
  providers: [AppService,CustomerResolver]
})
export class AppModule {}