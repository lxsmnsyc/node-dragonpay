interface URLSet {
  Payment: string;
  MerchantRequest: string;
  CollectByRefNo: string;
  CollectByTxnId: string;
  EmailInstruction: string;
}

const PRODUCTION_URL: URLSet = {
  Payment: 'https://gw.dragonpay.ph/Pay.aspx',
  MerchantRequest: 'https://gw.dragonpay.ph/MerchantRequest.aspx',
  CollectByRefNo: 'https://gw.dragonpay.ph/api/collect/v1/',
  CollectByTxnId: 'https://gw.dragonpay.ph/api/collect/v1/txnid/',
  EmailInstruction: 'https://gw.dragonpay.ph/Bank/GetEmailInstruction.aspx',
} as const;

const TEST_URL: URLSet = {
  Payment: 'https://test.dragonpay.ph/Pay.aspx',
  MerchantRequest: 'https://test.dragonpay.ph/MerchantRequest.aspx',
  CollectByRefNo: 'https://test.dragonpay.ph/api/collect/v1/',
  CollectByTxnId: 'https://test.dragonpay.ph/api/collect/v1/txnid/',
  EmailInstruction: 'https://test.dragonpay.ph/Bank/GetEmailInstruction.aspx',
} as const;

const URL = process.env.NODE_ENV ? PRODUCTION_URL : TEST_URL;

export default URL;
