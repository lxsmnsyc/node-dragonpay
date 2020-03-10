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
 * Given the Dragonpay reference no, you can then retrieve the payment
 * instruction by simply directing the user to the following url where
 * “XXXXXXXX” is the Dragonpay reference no.
 *
 * However, if you wish to further control how the instruction is rendered,
 * you have theoption of retrieving it in JSON format.
 */
export interface DragonpayEmailInstruction {
  /**
   * A 1-to 2-sentence basic description about
   * paying through this channel.  May be blank
   * in some cases.
   */
  introMsg: string;

  /**
   * This is a 2-dimensional array of name-value
   * pairs containing a field and its corresponding value.
   */
  paymentDetails: [string, any][];

  /**
   * An array of strings containing the deposit instructions
   */
  depositInstructions: string[];

  /**
   * An array of strings containing the instructions on
   * how to validate a deposit.  If this channel does not
   * require validation, this may be set to null.
   */
  validateInstructions: string[] | null;

  /**
   * An array of strings containing information about how
   * the payment for this channel is confirmed.
   */
  confirmInstructions: string[];

  /**
   * This is the standard Dragonpay disclaimer that merchants
   * are required to display.  Display of these information is
   * mandatory when using the Advanced Control method.
   */
  disclaimer: string;
}
