
interface URLSet {
  Payment: string;
  MerchantRequest: string;
  CollectByRefNo: string;
  CollectByTxnId: string;
  EmailInstruction: string;
}

export const PRODUCTION_URL: URLSet = {
  Payment: 'https://gw.dragonpay.ph/Pay.aspx',
  MerchantRequest: 'https://gw.dragonpay.ph/MerchantRequest.aspx',
  CollectByRefNo: 'https://gw.dragonpay.ph/api/collect/v1/',
  CollectByTxnId: 'https://gw.dragonpay.ph/api/collect/v1/txnid/',
  EmailInstruction: 'https://gw.dragonpay.ph/Bank/GetEmailInstruction.aspx',
} as const;

export const TEST_URL: URLSet = {
  Payment: 'https://test.dragonpay.ph/Pay.aspx',
  MerchantRequest: 'https://test.dragonpay.ph/MerchantRequest.aspx',
  CollectByRefNo: 'https://test.dragonpay.ph/api/collect/v1/',
  CollectByTxnId: 'https://test.dragonpay.ph/api/collect/v1/txnid/',
  EmailInstruction: 'https://test.dragonpay.ph/Bank/GetEmailInstruction.aspx',
} as const;

let URLS = TEST_URL;

export function getBaseURLS(): URLSet {
  return URLS;
}

export function useProduction(flag: boolean): void {
  URLS = flag ? PRODUCTION_URL : TEST_URL;
}
