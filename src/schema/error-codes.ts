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
export type ErrorCodes =
  | '000'
  | '101'
  | '102'
  | '103'
  | '104'
  | '105'
  | '106'
  | '107'
  | '108'
  | '109'
  | '110'
  | '111'
  | '112'
  | '201'
  | '202';

export const ErrorCodesDescription = {
  '000': 'Success',
  101: 'Invalid payment gateway id',
  102: 'Incorrect secret key',
  103: 'Invalid reference number',
  104: 'Unauthorized access',
  105: 'Invalid token',
  106: 'Currency not supported',
  107: 'Transaction cancelled',
  108: 'Insufficient funds',
  109: 'Transaction limit exceeded',
  110: 'Error in operation',
  111: 'Security Error',
  112: 'Invalid parameters',
  201: 'Invalid Merchant Id',
  202: 'Invalid Merchant Password',
};
