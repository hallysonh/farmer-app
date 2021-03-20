import { Farmer } from '@farmer/api-interfaces';

export const FARMERS: Farmer[] = Array(100).fill(0).map((_, i) => ({
  id: `${i}`,
  name: `Name ${i}`,
  document: {
    documentNumber: generateRandomNumber(11),
    documentType: 'CPF',
  },
  address: {
    street: `Rua ${i}`,
    address: `Bairro ${i}`,
    state: 'PI',
    country: 'Brazil',
  }
}));

function generateRandomNumber(length: number) {
  return Math.random().toString(9).replace(/[^0-9]+/g, '').substr(0, length);
}


