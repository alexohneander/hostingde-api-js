import { Filter } from './filter';
import { Sort } from './sort';

export type ClientRequest = {
	authToken: string;
	limit: number;
	page: number;
	filter?: Filter;
	sort?: Sort;
};
