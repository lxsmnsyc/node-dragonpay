import Joi from '@hapi/joi';

export const REF_NO = Joi.string()
  .trim()
  .length(20)
  .required();

export const TRANSACTION_ID = Joi.string()
  .trim()
  .length(40)
  .required();

/**
 * 5.3.1.6 Response Parameters using JSON/REST
 * The endpoint above returns a JSON-formatted record with the following fields:
 */
export interface DragonpayCollectResponse {
  MerchantId: string;
  TxnId: string;
  RefDate: string;
  Amount: string;
  Currency: string;
  Description: string;
  Status: string;
  Email: string;
  ProcId: string;
  SettleDate: string;
}
