import { Module } from '@nestjs/common'; 
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path'
// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { CustomerResolver} from './resolver/customer';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      typePaths: ['./apps/customer-api/src/schema/*.graphql'],
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