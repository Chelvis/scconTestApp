export interface Address {
  cep: string;
  logradouro: string;
  numero: number;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;

  erro: any;
}
