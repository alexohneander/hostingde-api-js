import { DNSSecDsData } from './dns_sec_ds_data';
import { DNSSecKeyData } from './dns_sec_key_data';

export type DNSSecKey = {
	keyData: DNSSecKeyData;
	dsData?: DNSSecDsData[];
	keyTag?: number;
	expiresOn?: Date;
	comments: string;
};
