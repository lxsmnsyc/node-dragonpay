export type ErrorCodes =
  | '000'
  | '101'
  | '102'
  | '103'
  | '104'
  | '105'
  | '106'
  | '107'
  | '108'
  | '109'
  | '110'
  | '111'
  | '112'
  | '201'
  | '202';

export const ErrorCodesDescription = {
  '000': 'Success',
  101: 'Invalid payment gateway id',
  102: 'Incorrect secret key',
  103: 'Invalid reference number',
  104: 'Unauthorized access',
  105: 'Invalid token',
  106: 'Currency not supported',
  107: 'Transaction cancelled',
  108: 'Insufficient funds',
  109: 'Transaction limit exceeded',
  110: 'Error in operation',
  111: 'Security Error',
  112: 'Invalid parameters',
  201: 'Invalid Merchant Id',
  202: 'Invalid Merchant Password',
};
