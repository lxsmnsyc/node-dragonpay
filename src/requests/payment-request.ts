import SHA1 from 'crypto-js/hmac-sha1';
import unfetch from 'isomorphic-unfetch';
import queryString from 'query-string';
import {
  DragonpayPaymentRequest, PAYMENT_REQUEST, DragonpayPaymentInput, DragonpayPaymentResponse,
} from '../schema/payment-request';
import { URLS } from '../utils';
import DigestMismatchError from '../errors/digest-mismatch';

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

function generateOutputMessage(
  secretkey: string,
  payload: DragonpayPaymentResponse,
): string {
  return `${
    payload.txnid
  }:${
    payload.refno
  }:${
    payload.status
  }:${
    payload.message
  }:${
    secretkey
  }`;
}

export default async function requestPayment(
  secretkey: string,
  payload: DragonpayPaymentInput,
): Promise<DragonpayPaymentResponse> {
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
  };

  const data = await unfetch(`${URLS.Payment}?${queryString.stringify(request)}`);
  const result: DragonpayPaymentResponse = await data.json();

  /**
   * Compare digests
   */
  const output = generateOutputMessage(secretkey, result);

  if (output !== result.digest) {
    throw new DigestMismatchError('requestPayment', output, result.digest);
  }

  return result;
}
