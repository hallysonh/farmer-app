import { Farmer } from '@farmer/api-interfaces';

export const FARMERS: Farmer[] = Array(100).fill(0).map((_, i) => ({
  id: `${i}`,
  name: i == 0 ? 'JOAO SILVA' : `Name ${i}`,
  document: {
    documentNumber: i == 0 ? '47512282911' : generateRandomNumber(11),
    documentType: 'CPF',
  },
  address: {
    street: `Rua ${i}`,
    address: i == 0 ? 'RUA BERRINI 505 22050401' : `Bairro ${i}`,
    state: 'PI',
    country: 'Brazil',
  }
}));

function generateRandomNumber(length: number) {
  return Math.random().toString(9).replace(/[^0-9]+/g, '').substr(0, length);
}