import { DNSSecKey } from './dns_sec_key';

export type DNSSecOptions = {
	keys?: DNSSecKey[];
	algorithms?: string[];
	nsecMode?: string;
	publishKsk?: boolean;
};
