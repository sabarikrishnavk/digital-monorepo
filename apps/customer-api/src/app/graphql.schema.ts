
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
}

export abstract class IMutation {
    abstract updateCustomer(id: string, name?: Nullable<string>, age?: Nullable<number>): Nullable<Customer> | Promise<Nullable<Customer>>;
}

type Nullable<T> = T | null;
