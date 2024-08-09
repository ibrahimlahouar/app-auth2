import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '8d32bde5-89b3-4dd8-8ef8-5f87cec32828',
};

export const sampleWithPartialData: IAuthority = {
  name: '0eddb1c6-5234-4822-b81b-610d92c07606',
};

export const sampleWithFullData: IAuthority = {
  name: '920ae3ee-11eb-47d3-a324-08b809c9b5f9',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
