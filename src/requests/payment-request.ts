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
import SHA1 from 'crypto-js/sha1';
import queryString from 'query-string';
import {
  DragonpayPaymentRequest, PAYMENT_REQUEST, DragonpayPaymentInput,
} from '../schema/payment-request';
import { URLS } from '../utils';
import { PAYMENT_CHANNELS } from '../schema/payment-channels';

function generateInputMessage(
  secretkey: string,
  payload: DragonpayPaymentInput,
): string {
  return `${
    payload.merchantId
  }:${
    payload.transactionId
  }:${
    payload.amount.toFixed(2)
  }:${
    payload.currency
  }:${
    payload.description
  }:${
    payload.email
  }:${
    secretkey
  }`;
}

export default async function requestPayment(
  secretkey: string,
  payload: DragonpayPaymentInput,
): Promise<string> {
  /**
   * Validate
   */
  const value: DragonpayPaymentInput = await PAYMENT_REQUEST.validateAsync(payload);

  /**
   * Generate message from payload
   */
  const message = generateInputMessage(secretkey, value);

  /**
   * generate hash
   */
  const hash = SHA1(message).toString();

  if (value.processId) {
    const { minTime, maxTime } = PAYMENT_CHANNELS[value.processId];

    const currentTime = new Date();
    const currentTimeIndex = currentTime.getHours() * 100 + currentTime.getMinutes();

    if (minTime && currentTimeIndex < minTime) {
      throw new RangeError('Requested transaction cannot be processed currently.');
    }
    if (maxTime && currentTimeIndex > maxTime) {
      throw new RangeError('Requested transaction cannot be processed currently.');
    }
  }

  /**
   * Transform payload to request
   */
  const request: DragonpayPaymentRequest = {
    merchantid: value.merchantId,
    txnid: value.transactionId,
    amount: value.amount.toFixed(2),
    ccy: value.currency,
    description: value.description,
    email: value.email,
    digest: hash,
    param1: value.param1,
    param2: value.param2,
    procid: value.processId,
  };

  return `${URLS.Payment}?${queryString.stringify(request)}`;
}
