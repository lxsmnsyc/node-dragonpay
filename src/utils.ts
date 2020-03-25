export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const PRODUCTION_URL = {
  Payment: 'https://gw.dragonpay.ph/Pay.aspx',
  MerchantRequest: 'https://gw.dragonpay.ph/MerchantRequest.aspx',
  CollectByRefNo: 'https://gw.dragonpay.ph/api/collect/v1/',
  CollectByTxnId: 'https://gw.dragonpay.ph/api/collect/v1/txnid/',
  EmailInstruction: 'https://gw.dragonpay.ph/Bank/GetEmailInstruction.aspx',
};

export const TEST_URL = {
  Payment: 'https://test.dragonpay.ph/Pay.aspx',
  MerchantRequest: 'https://test.dragonpay.ph/MerchantRequest.aspx',
  CollectByRefNo: 'https://test.dragonpay.ph/api/collect/v1/',
  CollectByTxnId: 'https://test.dragonpay.ph/api/collect/v1/txnid/',
  EmailInstruction: 'https://test.dragonpay.ph/Bank/GetEmailInstruction.aspx',
};

export const URLS = IS_PRODUCTION ? PRODUCTION_URL : TEST_URL;
