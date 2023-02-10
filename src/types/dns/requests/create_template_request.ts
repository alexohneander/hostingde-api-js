import { RecordTemplate } from '../record_template';
import { Template } from '../template';

export type CreateTemplateRequest = {
	authToken: string;
	dnsTemplate: Template;
	recordTemplates: RecordTemplate[];
};
