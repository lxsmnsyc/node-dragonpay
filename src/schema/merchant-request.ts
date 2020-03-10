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
    .max(20)
    .valid(
      'GETSTATUS',
      'VOID',
    )
    .required(),
  merchantId: Joi.string()
    .trim()
    .max(20)
    .required(),
  merchantPassword: Joi.string()
    .trim()
    .max(20)
    .required(),
  transactionId: Joi.string()
    .trim()
    .max(40)
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
