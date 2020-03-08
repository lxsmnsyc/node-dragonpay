export type StatusCode =
  | 'S'
  | 'F'
  | 'P'
  | 'U'
  | 'R'
  | 'K'
  | 'V'
  | 'A';

export const StatusCodeAcronym = {
  Success: 'S',
  Failure: 'F',
  Pending: 'P',
  Unknown: 'U',
  Refund: 'R',
  Chargeback: 'K',
  Void: 'V',
  Authorized: 'A',
};

export const StatusCodeDescription = {
  S: 'Success',
  F: 'Failure',
  P: 'Pending',
  U: 'Unknown',
  R: 'Refund',
  K: 'Chargeback',
  V: 'Void',
  A: 'Authorized',
};
