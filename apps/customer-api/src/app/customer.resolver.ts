import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Customer } from './graphql.schema';
 
 

@Resolver('Customer')
export class CustomerResolver {

    private customers: Customer[] = [
        {
            id: 'C1',
            name: 'Jack',
            age: 10, 
            status : 'ACTIVE'
        },
        {
            id: 'C2',
            name: 'Jill', 
            age: 11, 
            status : 'ACTIVE'
        }
    ];

    @Query('getCustomer')
    getCustomer( @Args('id') id: string): Customer {
        let cust = null;
        this.customers.forEach((customer) => {
            if( customer.id == id ) {
             cust = customer ; 
             return;
            }  
        });
        return cust;
    }

    @Query('getCustomers')
    getCustomers( ): Customer[] {
        
        return this.customers;
    }
    @Mutation()
    updateCustomer(  @Args('id') id: string, @Args('name') name: string, @Args('age') age: number) {

        let cust:Customer = new Customer();
        this.customers.forEach((customer) => {
            if( customer.id == id ) {
             cust = customer ; 
             return;
            }  
        }); 

        cust.age=age;
        cust.name=name;
        cust.status= 'UPDATE_IN_PROGRESS';

        return cust;
    }
}