
/**
 * 5.4.1.2 Pre-selecting Payment ChannelsDragonpay has very basic support
 * to allow merchant to go directly to a payment channel without having
 * to select it from the dropdown list.  The following are sample processor
 * id’swhich can be used to go straight to the selection:
 */
export type PaymentChannel =
  | 'BAYD'
  | 'BITC'
  | 'CC'
  | 'CEBL'
  | 'CUP'
  | 'DPAY'
  | 'ECPY'
  | 'GCSH'
  | 'LBC'
  | 'PYPL'
  | 'MLH'
  | 'RDS'
  | 'SMR'
  | 'BOL'
  | '711';

/**
 * 5.4.1.1 Filtering Payment Channels
 *
 * Dragonpay payment channels are grouped together by type –ex.
 * Online banking, Over-the-Counter/ATM, etc.  Merchants can
 * programmatically instruct Dragonpay which grouping to show
 * when the user is redirected to the payment gateway by using
 * the “mode” parameter.
 */
export type PaymentMode =
  | 1
  | 2
  | 4
  | 8
  | 16
  | 32
  | 64
  | 128
  | 256
  | 512
  | 1024
  | 2048;
