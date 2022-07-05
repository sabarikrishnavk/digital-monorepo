import { Module } from '@nestjs/common'; 
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ContentResolver} from './resolvers/content';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./apps/marketing-api/src/schema/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'apps/marketing-api/src/app/graphql.schema.ts'),
        outputAs: 'class',
      },
      playground: true
    }), 
  ],
  controllers: [AppController],
  providers: [AppService,ContentResolver]
})
export class AppModule {}