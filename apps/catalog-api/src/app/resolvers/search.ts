import { Args, Query, Resolver } from '@nestjs/graphql';
import { SearchResponse } from '../graphql.schema';
 
 

@Resolver('Search')
export class SearchResolver {
 
    @Query('getSearchByCategory') 
    getSearchByCategory( @Args('categoryid') categoryid: string):SearchResponse{
        let result = new SearchResponse();
        result.code ="SRCH-101"
        result.status="Success"

        return result;
    }
 
}