import { Address } from './address';

export interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: Address;
  active: boolean;
  date: Date;
}
