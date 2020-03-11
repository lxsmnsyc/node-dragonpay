/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */
import Joi from '@hapi/joi';
import { Currency, CURRENCY } from './currency';
import { StatusCode } from './status';
import {
  PaymentChannel, PaymentMode, PAYMENT_CHANNEL, PAYMENT_MODE,
} from './payment-channels';

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

  /**
   * [OPTIONAL] value that will be posted back to
   * merchant url when completed
   */
  param1: string;
  param2: string;

  processId?: PaymentChannel;
  mode?: PaymentMode;
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

  /**
   * [OPTIONAL] value that will be posted back to
   * merchant url when completed
   */
  param1: string;
  param2: string;

  procid?: PaymentChannel;
  mode?: PaymentMode;
}

export interface DragonpayPaymentResponse {
  txnid: string;
  refno: string;
  status: StatusCode;
  message: string;
  digest: string;
  param1: string;
  param2: string;
}

export const PAYMENT_REQUEST = Joi.object({
  merchantId: Joi.string()
    .trim()
    .max(20)
    .required(),
  transactionId: Joi.string()
    .trim()
    .max(40)
    .required(),
  currency: CURRENCY,
  amount: Joi.number()
    .positive()
    .required(),
  description: Joi.string()
    .trim()
    .max(128)
    .required(),
  email: Joi.string()
    .trim()
    .max(40)
    .required(),
  param1: Joi.string()
    .optional(),
  param2: Joi.string()
    .optional(),
  processId: PAYMENT_CHANNEL,
  mode: PAYMENT_MODE,
});
