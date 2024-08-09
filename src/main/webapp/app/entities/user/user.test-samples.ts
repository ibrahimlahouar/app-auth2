import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 'a6a05bdd-a28a-426b-a91d-786bb00562ae',
  login: 'LK{&sh@OM\\1d0woXb\\nD25TJ\\m7mxelu',
};

export const sampleWithPartialData: IUser = {
  id: 'a360fe12-3476-408b-ad14-55deefcf5a2e',
  login: 'Q66',
};

export const sampleWithFullData: IUser = {
  id: 'bfccb287-3d87-42d2-8426-613fe269cd52',
  login: '7kTjk',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
