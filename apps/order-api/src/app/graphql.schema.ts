
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum StatusCode {
    HTTP200 = "HTTP200",
    HTTP201 = "HTTP201",
    HTTP401 = "HTTP401",
    HTTP404 = "HTTP404",
    HTTP501 = "HTTP501",
    HTTP503 = "HTTP503"
}

export class OrderLine {
    orderid: string;
    customerid: string;
    linenumber?: Nullable<number>;
    skuid?: Nullable<string>;
    qty?: Nullable<number>;
    uom?: Nullable<string>;
    itemprice?: Nullable<number>;
    discount?: Nullable<number>;
    tax?: Nullable<number>;
    finalprice?: Nullable<number>;
}

export class OrderLineResponse {
    code: string;
    message?: Nullable<string>;
    status: StatusCode;
    data?: Nullable<OrderLine>;
}

export class OrderSummary {
    linetotal?: Nullable<number>;
    qty?: Nullable<number>;
    finalprice?: Nullable<number>;
    discount?: Nullable<number>;
}

export class OrderResponse {
    id: string;
    ordernumber?: Nullable<number>;
    code: string;
    status: StatusCode;
    summary?: Nullable<OrderSummary>;
}

export abstract class IQuery {
    abstract getOrder(id: string): Nullable<OrderResponse> | Promise<Nullable<OrderResponse>>;
}

type Nullable<T> = T | null;
