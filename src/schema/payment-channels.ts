import Joi from '@hapi/joi';

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
}

export type PaymentChannel =
  | 'BPI'
  | 'BPIB'
  | 'MAYB'
  | 'RSB'
  | 'BDRX'
  | 'BPXB'
  | 'MBXB'
  | 'BNRX'
  | 'AUB'
  | 'CBCX'
  | 'EWBX'
  | 'LBXB'
  | 'PNBB'
  | 'PNXB'
  | 'RCXB'
  | 'RSBB'
  | 'RSXB'
  | 'SBCA'
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
  | 'POSB'
  | 'RDP'
  | 'RLNT';

export type PaymentMethods = {
  [key in PaymentChannel]: PaymentMethod;
};

export const PAYMENT_CHANNELS: PaymentMethods = {
  BPI: {
    name: 'BPI ExpressOnline/Mobile (Fund Transfer)',
    description: '',
    minTime: 400,
    maxTime: 2330,
  },
  BPIB: {
    name: 'BPI ExpressOnline (Bills Payment)',
    description: '',
    minTime: 400,
    maxTime: 2330,
  },
  MAYB: {
    name: 'Maybank Online Banking',
    description: 'Pay online using Maybank2u Online Banking. NOTE: A P10.00 Service Fee will be added.',
  },
  RSB: {
    name: 'RobinsonsBank Online Bills Payment',
    description: 'Use your RobinsonsBank Online Banking account to make a bills payment.',
  },
  BDRX: {
    name: 'BDO Cash Deposit with Ref',
    description: 'Perform a Cash Deposit with Reference Number at any BDO branch. Payments are automatically processed after a few minutes. NOTE: A P25 Service Fee will be added. Choose a different bank if you do not agree to this fee.',
  },
  BPXB: {
    name: 'BPI Bills Payment',
    description: 'Pay cash over-the-counter at any BPI branch through Bills Payment. NOTE: A P100 Service Fee will be added. Choose a different bank if you do not agree to this fee.',
  },
  MBXB: {
    name: 'Metrobank Cash Payment',
    description: 'Make a cash bills payment over-the-counter at any Metrobank branch nationwide. NOTE: A P50 Service Fee will be added. Choose a different bank if you do not agree to this fee.',
  },
  BNRX: {
    name: 'BDO Network Bank (formerly ONB) Cash Dep',
    description: 'Perform a Cash Deposit with Reference Number at any BDO Network Bank (formerly ONB) branch. Payments are automatically processed after a few minutes. NOTE: A P15 Service Fee will be added. Choose a different bank if you do not agree to this fee.',
  },
  AUB: {
    name: 'AUB Online/Cash Payment',
    description: 'Pay using online banking or over-the-counter cash payment at any Asia United Bank branch nationwide',
  },
  CBCX: {
    name: 'Chinabank ATM/Cash Payment',
    description: 'Deposit your payment over-the-counter (OTC) at any Chinabank branch or ATM nationwide. Branches inside malls are open Saturdays. Provincial branches may charge handling fee for OTC. There are no charges for ATM payments.',
  },
  EWBX: {
    name: 'Eastwest Bank Online/Cash Payment',
    description: 'Transfer funds online or deposit cash over-the-counter at any EastWest Bank branch nationwide.',
  },
  LBXB: {
    name: 'Landbank Cash Payment',
    description: 'Deposit your payment over-the-counter at any Landbank branch nationwide. NOTE: A P50.00 Service Fee will be added.',
  },
  PNBB: {
    name: 'PNB E-Banking Bills Payment',
    description: 'Pay online using PNB e-Banking Bills Payment. Payments are automatically processed end of banking day.',
  },
  PNXB: {
    name: 'PNB Cash Payment',
    description: 'Pay cash over-the-counter at any PNB branch. Payments are automatically processed end of day. NOTE: A P25 Service Fee will be added. Choose a different bank if you do not agree to this fee.',
  },
  RCXB: {
    name: 'RCBC Cash Payment',
    description: 'Deposit your payment over-the-counter at any RCBC branch nationwide. NOTE: A P25.00 Service Fee will be added.',
  },
  RSBB: {
    name: 'RobinsonsBank Over-The-Counter',
    description: 'Make an over-the-counter Bills Payment at any RobinsonsBank branch nationwide. Payments are process in about 5 to 10 mins.',
  },
  RSXB: {
    name: 'RCBC Savings Cash Payment',
    description: 'Deposit your payment over-the-counter at any RCBC Savings Bank branch nationwide. NOTE: A P25.00 Service Fee will be added.',
  },
  SBCA: {
    name: 'Security Bank ATM Bills Payment',
    description: 'Pay at any Security Bank ATM using Bills Payment. Payments are processed end of day. NOTE: A P50 Service Fee will be added. Choose a different bank if you do not agree to this fee.',
  },
  SBCB: {
    name: 'Security Bank Cash Payment',
    description: 'Pay over-the-counter at any Security Bank branch. Payments are processed next day. NOTE: A P50 Service Fee will be added. Choose a different bank if you do not agree to this fee.',
  },
  UBXB: {
    name: 'Unionbank Cash Payment',
    description: 'Deposit your payment over-the-counter at any Unionbank branch nationwide.',
  },
  UCXB: {
    name: 'UCP ATM/Cash Payment',
    description: 'Make a bills payment over-the-counter (OTC) at any UCPB branch or ATM nationwide.',
  },
  BAYD: {
    name: 'Bayad Center',
    description: 'Pay at any Bayad Center branch nationwide.',
  },
  LBC: {
    name: 'LBC',
    description: 'Pay at any LBC outlet nationwide (except those inside SM Malls) 7-days-a-week. LBC is now a Bayad Center.',
  },
  SMR: {
    name: 'SM Dept/Supermarket/Savemore Counter',
    description: 'Pay at any Payment Counter of SM Dept Store, SM Supermarket, Savemore nationwide 7-days-a-week. Payments are processed end of day.',
  },
  CEBL: {
    name: 'Cebuana Lhuiller Bills Payment',
    description: 'Pay at any Cebuana Lhuillier branch nationwide. Payments are processed next day.',
  },
  RDS: {
    name: 'Robinsons Dept Store',
    description: 'Pay at Robinsons Dept Store Bills Payment Counter 7-days-a-week up to 7pm. Payments are processed end of day.',
  },
  ECPY: {
    name: 'ECPay (Pawnshops, Payment Centers)',
    description: 'Pay at any ECPay Collection Partner nationwide including Ever, Gaisano, NCCC, ExpressPay, CVM Pawnshop, Via Express, selected Tambunting, Smart/Cignal distributors, and many more.',
  },
  PLWN: {
    name: 'Palawan Pawnshop',
    description: 'Make an over-the-counter Bills Payment at any Palawan Pawnshop branch nationwide.',
  },
  POSB: {
    name: 'Posible Partners',
    description: 'Pay at various Posible partners including Family Mart and Phoenix gas stations',
  },
  RDP: {
    name: 'RD Pawnshop',
    description: 'Make an over-the-counter Bills Payment at any RD Pawnshop branch nationwide.',
  },
  RLNT: {
    name: 'Ruralnet Banks and Coops',
    description: 'Pay at any rural bank or cooperative affiliated with RuralNet',
  },
};


export const PAYMENT_CHANNEL = Joi.string()
  .trim()
  .valid(
    'BPI',
    'BPIB',
    'MAYB',
    'RSB',
    'BDRX',
    'BPXB',
    'MBXB',
    'BNRX',
    'AUB',
    'CBCX',
    'EWBX',
    'LBXB',
    'PNBB',
    'PNXB',
    'RCXB',
    'RSBB',
    'RSXB',
    'SBCA',
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
    'POSB',
    'RDP',
    'RLNT',
  )
  .optional();
