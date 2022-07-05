import { Args, Query, Resolver } from '@nestjs/graphql';
import { ContentResponse } from '../graphql.schema';
 
 

@Resolver('Content')
export class ContentResolver {
 
    @Query('getContentDetails') 
    getContentDetails( @Args('contentid') contentid: string):ContentResponse{
        let result = new ContentResponse();
        result.code ="CONTENT-101"
        result.status="Success"

        return result;
    }
 
}