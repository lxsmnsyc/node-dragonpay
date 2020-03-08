import Joi from '@hapi/joi';
import { Currency, CURRENCY } from './currency';
import { StatusCode } from './status';

export interface DragonpayPaymentInput {
  /**
   * A unique code assigned to Merchant
   */
  merchantId: string;
  /**
   * A unique id identifying this specific transaction from the merchant side.
   */
  transactionId: string;
  /**
   * The amount to get from the end-user (XXXX.XX)
   */
  amount: number;
  /**
   * The currency of the amount
   */
  currency: Currency;
  /**
   * A brief description of what the payment is for
   */
  description: string;
  /**
   * email address of customer
   */
  email: string;
}

/**
 * 5.2.1.1
 */
export interface DragonpayPaymentRequest {
  /**
   * A unique code assigned to Merchant
   */
  merchantid: string;
  /**
   * A unique id identifying this specific transaction from the merchant side.
   */
  txnid: string;
  /**
   * The amount to get from the end-user (XXXX.XX)
   */
  amount: string;
  /**
   * The currency of the amount
   */
  ccy: Currency;
  /**
   * A brief description of what the payment is for
   */
  description: string;
  /**
   * email address of customer
   */
  email: string;
  /**
   * A sha1 checksum digest of all the parameters along with the secret key.
   */
  digest: string;
}

export interface DragonpayPaymentResponse {
  txnid: string;
  refno: string;
  status: StatusCode;
  message: string;
  digest: string;
}

export const PAYMENT_REQUEST = Joi.object({
  merchantId: Joi.string()
    .trim()
    .length(20)
    .required(),
  transactionId: Joi.string()
    .trim()
    .length(40)
    .required(),
  currency: CURRENCY,
  amount: Joi.number()
    .positive()
    .required(),
  description: Joi.string()
    .trim()
    .length(128)
    .required(),
  email: Joi.string()
    .trim()
    .length(40)
    .required(),
});
