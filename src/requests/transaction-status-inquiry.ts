import { DragonpayMerchantPartialInput, DragonpayMerchantResponse } from '../schema/merchant-request';
import requestMerchant from './merchant-request';

export default function getTransactionStatusInquiry(
  payload: DragonpayMerchantPartialInput,
): Promise<DragonpayMerchantResponse> {
  return requestMerchant({
    operation: 'GETSTATUS',
    ...payload,
  });
}
