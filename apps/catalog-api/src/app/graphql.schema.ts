
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class InventoryRequest {
    skuid: string;
    location: string;
    sth?: Nullable<number>;
}

export class InventoryResponse {
    data?: Nullable<InventoryRequest>;
    code: string;
    status: string;
}

export abstract class IQuery {
    abstract getInventoryDetails(skuid: string): Nullable<Nullable<InventoryResponse>[]> | Promise<Nullable<Nullable<InventoryResponse>[]>>;

    abstract getProductDetails(skuid: string): Nullable<ProductResponse> | Promise<Nullable<ProductResponse>>;

    abstract getSearchByCategory(categoryid: string): Nullable<SearchResponse> | Promise<Nullable<SearchResponse>>;

    abstract getSearchByTerm(searchTerm?: Nullable<string>): Nullable<SearchResponse> | Promise<Nullable<SearchResponse>>;
}

export abstract class IMutation {
    abstract updateInventoryDetails(skuid: string, location: string, sth?: Nullable<number>): Nullable<InventoryResponse> | Promise<Nullable<InventoryResponse>>;
}

export class ProductRequest {
    skuid: string;
    name?: Nullable<string>;
    price?: Nullable<number>;
}

export class ProductResponse {
    data?: Nullable<ProductRequest>;
    code: string;
    status: string;
}

export class SearchRequest {
    categoryid?: Nullable<string>;
    searchTerm?: Nullable<string>;
}

export class SearchResponse {
    data?: Nullable<SearchRequest>;
    code: string;
    status: string;
}

type Nullable<T> = T | null;
