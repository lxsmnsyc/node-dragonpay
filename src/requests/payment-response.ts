import { DragonpayPaymentResponse } from '../schema/payment-request';
import DigestMismatchError from '../errors/digest-mismatch';

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

export default function receivePaymentResponse(
  secretkey: string,
  payload: DragonpayPaymentResponse,
): boolean {
  /**
   * Compare digests
   */
  const output = generateOutputMessage(secretkey, payload);

  if (output !== payload.digest) {
    throw new DigestMismatchError('requestPayment', output, payload.digest);
  }

  return true;
}
