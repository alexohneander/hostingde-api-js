import { Filter } from "./request_filter"
import { Sort } from "./request_sort"

export type ClientRequest = {
    authToken:string,
    limit:number,
    page:number,
    filter?:Filter,
    sort?:Sort
}