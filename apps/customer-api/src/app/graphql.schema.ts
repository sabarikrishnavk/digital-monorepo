
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Customer {
    id: string;
    name?: Nullable<string>;
    age?: Nullable<number>;
    status?: Nullable<string>;
}

export abstract class IQuery {
    abstract getCustomers(): Nullable<Nullable<Customer>[]> | Promise<Nullable<Nullable<Customer>[]>>;

    abstract getCustomer(id: string): Nullable<Customer> | Promise<Nullable<Customer>>;

    abstract getLoyaltyDetails(customerid: string): Nullable<LoyaltyResponse> | Promise<Nullable<LoyaltyResponse>>;
}

export abstract class IMutation {
    abstract updateCustomer(id: string, name?: Nullable<string>, age?: Nullable<number>): Nullable<Customer> | Promise<Nullable<Customer>>;

    abstract updateLoyaltyDetails(customerid: string, level?: Nullable<string>, points?: Nullable<number>): Nullable<LoyaltyResponse> | Promise<Nullable<LoyaltyResponse>>;
}

export class LoyaltyRequest {
    customerid: string;
    level?: Nullable<string>;
    points?: Nullable<number>;
    status?: Nullable<string>;
}

export class LoyaltyResponse {
    data?: Nullable<LoyaltyRequest>;
    code: string;
    status: string;
}

type Nullable<T> = T | null;
