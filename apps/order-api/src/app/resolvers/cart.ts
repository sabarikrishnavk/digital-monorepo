import { Args, Query, Resolver ,ResolveReference} from '@nestjs/graphql';
import { OrderResponse, StatusCode } from '../graphql.schema';
 
 

@Resolver('Cart')
export class CartResolver {
 
    @Query('getOrder') 
    getOrder(  @Args('id') id: string):OrderResponse{
        const result = new OrderResponse();
        result.code ="CART-101"
        result.status=StatusCode.HTTP200;

        return result;
    }
    @ResolveReference()
    resolveReference(reference: { __typename: string; id: string }) {
    //   return this.orderService.findById(reference.id);
        const result = new OrderResponse();
        result.code ="CART-101";
        result.status=StatusCode.HTTP200;

        return result;
    }
}