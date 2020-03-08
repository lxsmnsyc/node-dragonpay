import { DragonpayMerchantPartialInput, DragonpayMerchantResponse } from '../schema/merchant-request';
import requestMerchant from './merchant-request';

export default function cancelTransaction(
  payload: DragonpayMerchantPartialInput,
): Promise<DragonpayMerchantResponse> {
  return requestMerchant({
    operation: 'VOID',
    ...payload,
  });
}
