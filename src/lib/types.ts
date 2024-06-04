import { links } from '@/lib/data';

export type SectionName = (typeof links)[number]['name'];

export interface MailResponse {
  data?: string;
  error?: string;
}
