
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class ContentRequest {
    contentid: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    htmlContent?: Nullable<string>;
}

export class ContentResponse {
    data?: Nullable<ContentRequest>;
    code: string;
    status: string;
}

export abstract class IQuery {
    abstract getContentDetails(contentid: string): Nullable<ContentResponse> | Promise<Nullable<ContentResponse>>;
}

type Nullable<T> = T | null;
