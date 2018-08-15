import { Address } from './address';

export interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  zipCode: string;
  address: Address;
  active: boolean;
  date: Date;
}
