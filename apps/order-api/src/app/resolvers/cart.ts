import { Args, Query, Resolver } from '@nestjs/graphql';
import { OrderResponse } from '../graphql.schema';
 
 

@Resolver('Cart')
export class CartResolver {
 
    @Query('getOrder') 
    getOrder( @Args('customerid') customerid: string , @Args('orderid') orderid: string):OrderResponse{
        let result = new OrderResponse();
        result.code ="CART-101"
        result.status="Success"

        return result;
    }
 
}