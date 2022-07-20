
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class SearchRequest {
    categoryid?: Nullable<string>;
    searchTerm?: Nullable<string>;
}

export class SearchResponse {
    data?: Nullable<SearchRequest>;
    code: string;
    status: string;
}

export abstract class IQuery {
    abstract getSearchByCategory(categoryid: string): Nullable<SearchResponse> | Promise<Nullable<SearchResponse>>;

    abstract getSearchByTerm(searchTerm?: Nullable<string>): Nullable<SearchResponse> | Promise<Nullable<SearchResponse>>;
}

type Nullable<T> = T | null;
