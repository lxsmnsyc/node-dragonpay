import Joi from '@hapi/joi';

/**
 * 5.3.1.1
 * Request Parameters using Name-Value PairThese are the parameters
 * passed by the Merchant to the PS via name-value pairs to request
 * for a transaction status.  Name-value pairs may be sent using
 * either HTTP GET or HTTP POST to the MerchantRequest.aspxfunction.
 */
export interface DragonpayMerchantRequest {
  /**
   * The operation to perform (value = GETSTATUS)
   */
  op: string;
  /**
   * A unique code assigned to Merchant
   */
  merchantid: string;
  /**
   * The merchant’s API password
   */
  merchantpwd: string;
  /**
   * A unique id identifying this specific transaction from the merchant side
   */
  txnid: string;
}

export interface DragonpayMerchantInput {
  operation: string;
  merchantId: string;
  merchantPassword: string;
  transactionId: string;
}

export const MERCHANT_REQUEST = Joi.object({
  operation: Joi.string()
    .trim()
    .length(20)
    .valid([
      'GETSTATUS',
      'VOID',
    ])
    .required(),
  merchantId: Joi.string()
    .trim()
    .length(20)
    .required(),
  merchantPassword: Joi.string()
    .trim()
    .length(20)
    .required(),
  transactionId: Joi.string()
    .trim()
    .length(40)
    .required(),
});

export interface DragonpayMerchantResponse {
  status: string;
}

export interface DragonpayMerchantPartialInput {
  merchantId: string;
  merchantPassword: string;
  transactionId: string;
}
