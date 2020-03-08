import Joi from '@hapi/joi';

export type Currency =
  | 'PHP'
  | 'USD'
  | 'CAD';

export const CURRENCY = Joi.string()
  .valid([
    'PHP',
    'USD',
    'CAD',
  ])
  .required();
