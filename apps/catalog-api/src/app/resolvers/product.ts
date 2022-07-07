import { Args, Query, Resolver } from '@nestjs/graphql';
import { ProductAPI } from '../datasources/ProductApi';
import { ProductResponse } from '../graphql.schema';
 
 

@Resolver('Product')
export class ProductResolver {
    constructor(private readonly productApi: ProductAPI) {}
 
    @Query('getProductDetails') 
    getProductDetails( @Args('skuid') skuid: string):ProductResponse{
        const result = new ProductResponse();
        result.code ="PRODUCT-101"
        result.status="Success"

        return result;
    }
 
}