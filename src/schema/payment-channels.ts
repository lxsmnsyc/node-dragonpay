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
import { string } from 'yup';

/**
 * 5.4.1.2 Pre-selecting Payment ChannelsDragonpay has very basic support
 * to allow merchant to go directly to a payment channel without having
 * to select it from the dropdown list.  The following are sample processor
 * id’swhich can be used to go straight to the selection:
 */

export interface PaymentMethod {
  name: string;
  description: string;
  minTime?: number;
  maxTime?: number;
  devOnly?: boolean;
  minAmount?: number;
  maxAmount?: number;
  additionalCharge?: number;
}

export type PaymentChannel =
  | 'BOG'
  | 'BOGX'
  | 'BDO'
  | 'CBC'
  | 'LBPA'
  | 'BPI'
  | 'MAYB'
  | 'RSB'
  | 'BDRX'
  | 'BPXB'
  | 'MBXB'
  | 'BNRX'
  | 'AUB'
  | 'CBCX'
  | 'EWXB'
  | 'LBXB'
  | 'PNBB'
  | 'PNXB'
  | 'RCXB'
  | 'RSBB'
  | 'SBCB'
  | 'UBXB'
  | 'UCXB'
  | 'BAYD'
  | 'LBC'
  | 'SMR'
  | 'CEBL'
  | 'RDS'
  | 'ECPY'
  | 'PLWN'
  | 'RDP'
  | 'RLNT'
  | 'MBTC'
  | 'PSB'
  | 'RCBC'
  | 'UBPB'
  | 'UCPB'
  | 'BITC'
  | 'GRPY'
  | 'I2I'
  | 'GCSH'
  | '711'
  | 'BDOA'
  | 'BPIA'
  | 'DPAY'
  | 'MLH';

export type PaymentGroupType =
  | 'ONLINE_BANKING_OR_E_WALLET'
  | 'OVER_THE_COUNTER_OR_ATM_BANKING'
  | 'OVER_THE_COUNTER_OTHERS'
  | 'MORE';

export interface PaymentGroup {
  description: string;
  channels: PaymentChannel[];
}

export type PaymentGroups = {
  [key in PaymentGroupType]: PaymentGroup;
}

export type PaymentMethods = {
  [key in PaymentChannel]: PaymentMethod;
}

export const PAYMENT_GROUPS: PaymentGroups = {
  ONLINE_BANKING_OR_E_WALLET: {
    description: 'Online Banking/E Wallet',
    channels: [
      'BOG',
      'BDO',
      'CBC',
      'LBPA',
      'BPI',
      'BPIA',
      'MAYB',
      'RSB',
      'MBTC',
      'PSB',
      'RCBC',
      'UBPB',
      'UCPB',
      'BITC',
      'GRPY',
    ],
  },
  OVER_THE_COUNTER_OR_ATM_BANKING: {
    description: 'Over-the-Counter/ATM Banking',
    channels: [
      'BOGX',
      'BDRX',
      'BPXB',
      'MBXB',
      'BNRX',
      'AUB',
      'CBCX',
      'EWXB',
      'LBXB',
      'PNBB',
      'PNXB',
      'RCXB',
      'RSBB',
      'SBCB',
      'UBXB',
      'UCXB',
      'I2I',
      'BDOA',
    ],
  },
  OVER_THE_COUNTER_OTHERS: {
    description: 'Over-the-Counter Others',
    channels: [
      'BAYD',
      'LBC',
      'SMR',
      'CEBL',
      'RDS',
      'ECPY',
      'PLWN',
      'RDP',
      'RLNT',
      '711',
      'MLH',
    ],
  },
  MORE: {
    description: 'More',
    channels: [
      'GCSH',
      'DPAY',
    ],
  },
};

export const PAYMENT_CHANNELS: PaymentMethods = {
  BOG: {
    name: 'Bogus Bank',
    description: 'Use your Bogus Bank Online Banking account to make a payment (TEST ONLY).',
    devOnly: true,
  },
  BOGX: {
    name: 'Bogus Bank Over-The-Counter',
    description: 'Deposit your payment over-the-counter at any Bogus Bank branch worldwide (TEST ONLY).',
    devOnly: true,
  },
  BDO: {
    name: 'BDO Internet Banking',
    description: 'Use your BDO Retail Internet Banking (RIB) account to make a payment. Read our BDO RIB guide for more details.',
    minTime: 600,
    maxTime: 2130,
    minAmount: 1.00,
    maxAmount: 1000000.00,
  },
  CBC: {
    name: 'Chinabank Online',
    description: 'Use your Chinabank Online Banking account to make a payment.',
    minTime: 600,
    maxTime: 2100,
    minAmount: 1.00,
    maxAmount: 200000.00,
  },
  LBPA: {
    name: 'Landbank ATM Online',
    description: 'Pay using your Landbank ATM account at the Landbank ePaymentPortal. Landbank charges a PHP10.00 service fee. Visit our How-To page for more details',
    minTime: 300,
    maxTime: 2130,
    minAmount: 1.00,
    maxAmount: 200000.00,
  },
  BPI: {
    name: 'BPI ExpressOnline/Mobile (Fund Transfer)',
    description: 'Use your BPI ExpressOnline/Mobile (EOLM) Banking account to make a Fund Transfer. Choose this option only if you have previously registered Dragonpay for 3rd Party Fund Transfer or enabled Fund Transfer to Anyone. A P15 Service Fee and a small random verification fee is added.',
    minTime: 400,
    maxTime: 2330,
    minAmount: 49980.01,
    maxAmount: 1000000.00,
    additionalCharge: 15.00,
  },
  MAYB: {
    name: 'Maybank Online Banking',
    description: 'Pay online using Maybank2u Online Banking. NOTE: A P10.00 Service Fee will be added.',
    minAmount: 1.00,
    maxAmount: 1000000.00,
    additionalCharge: 10.00,
  },
  RSB: {
    name: 'RobinsonsBank Online Bills Payment',
    description: 'Use your RobinsonsBank Online Banking account to make a bills payment.',
    minTime: 0,
    maxTime: 2300,
    minAmount: 10.00,
    maxAmount: 1000000.00,
  },
  BDRX: {
    name: 'BDO Cash Deposit with Ref',
    description: 'Perform a Cash Deposit with Reference Number at any BDO branch. Payments are automatically processed after a few minutes. NOTE: A P25 Service Fee will be added. Choose a different bank if you do not agree to this fee.',
    minAmount: 1.00,
    maxAmount: 2000000.00,
    additionalCharge: 25.00,
  },
  BPXB: {
    name: 'BPI Bills Payment',
    description: 'Pay cash over-the-counter at any BPI branch through Bills Payment. NOTE: A P100 Service Fee will be added. Choose a different bank if you do not agree to this fee.',
    minAmount: 1.00,
    maxAmount: 1000000.00,
    additionalCharge: 100.00,
  },
  MBXB: {
    name: 'Metrobank Cash Payment',
    description: 'Make a cash bills payment over-the-counter at any Metrobank branch nationwide. NOTE: A P50 Service Fee will be added. Choose a different bank if you do not agree to this fee.',
    minAmount: 50.00,
    maxAmount: 2000000.00,
    additionalCharge: 50.00,
  },
  BNRX: {
    name: 'BDO Network Bank (formerly ONB) Cash Dep',
    description: 'Perform a Cash Deposit with Reference Number at any BDO Network Bank (formerly ONB) branch. Payments are automatically processed after a few minutes. NOTE: A P15 Service Fee will be added. Choose a different bank if you do not agree to this fee.',
    minAmount: 10.00,
    maxAmount: 1000000.00,
    additionalCharge: 15.00,
  },
  AUB: {
    name: 'AUB Online/Cash Payment',
    description: 'Pay using online banking or over-the-counter cash payment at any Asia United Bank branch nationwide',
    minAmount: 10.00,
    maxAmount: 1000000.00,
  },
  CBCX: {
    name: 'Chinabank ATM/Cash Payment',
    description: 'Deposit your payment over-the-counter (OTC) at any Chinabank branch or ATM nationwide. Branches inside malls are open Saturdays. Provincial branches may charge handling fee for OTC. There are no charges for ATM payments.',
    devOnly: true,
    minAmount: 1.00,
    maxAmount: 20040.00,
  },
  EWXB: {
    name: 'Eastwest Bank Online/Cash Payment',
    description: 'Transfer funds online or deposit cash over-the-counter at any EastWest Bank branch nationwide.',
    minAmount: 1.00,
    maxAmount: 1000000.00,
  },
  LBXB: {
    name: 'Landbank Cash Payment',
    description: 'Deposit your payment over-the-counter at any Landbank branch nationwide. NOTE: A P50.00 Service Fee will be added.',
    minAmount: 1.00,
    maxAmount: 1000000.00,
    additionalCharge: 50.00,
  },
  PNBB: {
    name: 'PNB E-Banking Bills Payment',
    description: 'Pay online using PNB e-Banking Bills Payment. Payments are automatically processed end of banking day.',
    minAmount: 1.00,
    maxAmount: 1000000.00,
  },
  PNXB: {
    name: 'PNB Cash Payment',
    description: 'Pay cash over-the-counter at any PNB branch. Payments are automatically processed end of day. NOTE: A P25 Service Fee will be added. Choose a different bank if you do not agree to this fee.',
    minAmount: 1.00,
    maxAmount: 1000000.00,
    additionalCharge: 25.00,
  },
  RCXB: {
    name: 'RCBC Cash Payment',
    description: 'Deposit your payment over-the-counter at any RCBC branch nationwide. NOTE: A P25.00 Service Fee will be added.',
    minAmount: 25.00,
    maxAmount: 1000000.00,
  },
  RSBB: {
    name: 'RobinsonsBank Over-The-Counter',
    description: 'Make an over-the-counter Bills Payment at any RobinsonsBank branch nationwide. Payments are process in about 5 to 10 mins.',
    minAmount: 10.00,
    maxAmount: 1000000.00,
  },
  SBCB: {
    name: 'Security Bank Cash Payment',
    description: 'Pay over-the-counter at any Security Bank branch. Payments are processed next day. NOTE: A P50 Service Fee will be added. Choose a different bank if you do not agree to this fee.',
    minAmount: 1.00,
    maxAmount: 1000000.00,
    additionalCharge: 50.00,
  },
  UBXB: {
    name: 'Unionbank Cash Payment',
    description: 'Deposit your payment over-the-counter at any Unionbank branch nationwide.',
    minAmount: 1.00,
    maxAmount: 2000000.00,
  },
  UCXB: {
    name: 'UCP ATM/Cash Payment',
    description: 'Make a bills payment over-the-counter (OTC) at any UCPB branch or ATM nationwide.',
    minAmount: 1.00,
    maxAmount: 1000000.00,
  },
  BAYD: {
    name: 'Bayad Center',
    description: 'Pay at any Bayad Center branch nationwide.',
    minAmount: 50.00,
    maxAmount: 500000.00,
  },
  LBC: {
    name: 'LBC',
    description: 'Pay at any LBC outlet nationwide (except those inside SM Malls) 7-days-a-week. LBC is now a Bayad Center.',
    minAmount: 50.00,
    maxAmount: 200000.00,
  },
  SMR: {
    name: 'SM Dept/Supermarket/Savemore Counter',
    description: 'Pay at any Payment Counter of SM Dept Store, SM Supermarket, Savemore nationwide 7-days-a-week. Payments are processed end of day.',
    minAmount: 50.00,
    maxAmount: 200000.00,
  },
  CEBL: {
    name: 'Cebuana Lhuiller Bills Payment',
    description: 'Pay at any Cebuana Lhuillier branch nationwide. Payments are processed next day.',
    minAmount: 10.00,
    maxAmount: 500000.00,
  },
  RDS: {
    name: 'Robinsons Dept Store',
    description: 'Pay at Robinsons Dept Store Bills Payment Counter 7-days-a-week up to 7pm. Payments are processed end of day.',
    minAmount: 50.00,
    maxAmount: 200000.00,
  },
  ECPY: {
    name: 'ECPay (Pawnshops, Payment Centers)',
    description: 'Pay at any ECPay Collection Partner nationwide including Ever, Gaisano, NCCC, ExpressPay, CVM Pawnshop, Via Express, selected Tambunting, Smart/Cignal distributors, and many more.',
    minAmount: 50.00,
    maxAmount: 500000.00,
  },
  PLWN: {
    name: 'Palawan Pawnshop',
    description: 'Make an over-the-counter Bills Payment at any Palawan Pawnshop branch nationwide.',
    minAmount: 10.00,
    maxAmount: 20000.00,
  },
  RDP: {
    name: 'RD Pawnshop',
    description: 'Make an over-the-counter Bills Payment at any RD Pawnshop branch nationwide.',
    minAmount: 10.00,
    maxAmount: 50000.00,
  },
  RLNT: {
    name: 'Ruralnet Banks and Coops',
    description: 'Pay at any rural bank or cooperative affiliated with RuralNet',
    minAmount: 20.00,
    maxAmount: 100000.00,
  },
  MBTC: {
    name: 'Metrobank Direct',
    description: 'Use your Metrobankdirect Online Banking account to make a payment.',
    minTime: 300,
    maxTime: 2330,
    minAmount: 1.00,
    maxAmount: 1000000.00,
  },
  PSB: {
    name: 'PSBank Online',
    description: 'Pay using PSBank Online. Payments are processed next day.',
    minAmount: 10.00,
    maxAmount: 25000.00,
  },
  RCBC: {
    name: 'RCBC Online Banking',
    description: 'Use your RCBC AccessOne Online Banking account to make a payment. NOTE: A P5.00 Service Fee will be added.',
    minAmount: 1.00,
    maxAmount: 1000000.00,
    additionalCharge: 5.00,
  },
  UBPB: {
    name: 'UnionBank Internet Banking',
    description: 'Use your Unionbank Online Banking account to make a payment. There is a Php10.00 surcharge.',
    minAmount: 1.00,
    maxAmount: 1000000.00,
    additionalCharge: 10.00,
  },
  UCPB: {
    name: 'UCPB Connect',
    description: 'Use your UCPBConnect Online Banking account to make a payment.',
    minAmount: 1.00,
    maxAmount: 100000.00,
  },
  BITC: {
    name: 'Coins.ph Wallet/Bitcoin',
    description: 'Pay using Bitcoins or Coins.ph Wallet.',
    minAmount: 1.00,
    maxAmount: 1000000.00,
  },
  GRPY: {
    name: 'GrabPay',
    description: 'Pay using your GrabPay wallet. NOTE: Any centavo portion will be rounded up to the nearest Peso.',
    minAmount: 1.00,
    maxAmount: 10000.00,
  },
  I2I: {
    name: 'i2i Rural Banks',
    description: 'Pay at any I2I-member Rural Bank including Cantilan Bank, City Savings Bank, and many others.',
    minAmount: 1.00,
    maxAmount: 100000.00,
  },
  GCSH: {
    name: 'GCash',
    description: 'Pay using Globe GCash. NOTE: A P10 Service Fee may be added.',
    minAmount: 1.00,
    maxAmount: 30000.00,
    additionalCharge: 10.00,
  },
  711: {
    name: '7-Eleven',
    description: 'Pay at any 7-11 convenience store in the Philippines nationwide 24x7.',
    minAmount: 250.00,
    maxAmount: 10000.00,
  },
  BDOA: {
    name: 'Banco De Oro ATM',
    description: 'Pay at any BDO ATM nationwide. Payments are processed next day.',
    minAmount: 200.00,
    maxAmount: 1000000.00,
  },
  BPIA: {
    name: 'BPI Online/Mobile (NEW)',
    description: 'Use your BPI Online/Mobile (EOLM) Banking account to make a payment. A P15 Service Fee is added.',
    minTime: 200,
    maxTime: 2330,
    minAmount: 1.00,
    maxAmount: 49980.01,
    additionalCharge: 15.00,
  },
  DPAY: {
    name: 'Dragonpay Prepaid Credits',
    description: 'Use the Dragonpay Mobile App and pay using your prepaid credits in realtime and earn bonus loyalty points with your purchase.',
    minAmount: 1.00,
    maxAmount: 1000000.00,
  },
  MLH: {
    name: 'M. Lhuillier',
    description: 'Pay at any M. Lhuillier outlet nationwide 7-days-a-week. A service fee will be charged by M. Lhuillier directly to you. Payments are processed next day.',
    minAmount: 180.00,
    maxAmount: 500000.00,
  },
};

export const PAYMENT_CHANNEL = string()
  .trim()
  .oneOf([
    'BOG',
    'BOGX',
    'BDO',
    'CBC',
    'LBPA',
    'BPI',
    'MAYB',
    'RSB',
    'BDRX',
    'BPXB',
    'MBXB',
    'BNRX',
    'AUB',
    'CBCX',
    'EWXB',
    'LBXB',
    'PNBB',
    'PNXB',
    'RCXB',
    'RSBB',
    'SBCB',
    'UBXB',
    'UCXB',
    'BAYD',
    'LBC',
    'SMR',
    'CEBL',
    'RDS',
    'ECPY',
    'PLWN',
    'RDP',
    'RLNT',
    'MBTC',
    'PSB',
    'RCBC',
    'UBPB',
    'UCPB',
    'BITC',
    'GRPY',
    'I2I',
    'GCSH',
    '711',
    'BDOA',
    'BPIA',
    'DPAY',
    'MLH',
  ])
  .optional();
