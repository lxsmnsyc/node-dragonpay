import unfetch from 'isomorphic-unfetch';
import queryString from 'query-string';
import {
  DragonpayMerchantInput, MERCHANT_REQUEST, DragonpayMerchantRequest, DragonpayMerchantResponse,
} from '../schema/merchant-request';
import { URLS } from '../utils';

export default async function requestMerchant(
  payload: DragonpayMerchantInput,
): Promise<DragonpayMerchantResponse> {
  const value: DragonpayMerchantInput = await MERCHANT_REQUEST.validateAsync(payload);

  const request: DragonpayMerchantRequest = {
    op: value.operation,
    txnid: value.transactionId,
    merchantid: value.merchantId,
    merchantpwd: value.merchantPassword,
  };

  const data = await unfetch(`${URLS.MerchantRequest}?${queryString.stringify(request)}`);
  const result: DragonpayMerchantResponse = await data.json();

  return result;
}
