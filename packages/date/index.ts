import randomNumber from '@js-random/number';

interface IDateRange {
  from: Date;
  to: Date;
}

/**
 * Generates random dates based on a range
 *
 * @param { IDateRange } range
 */
export default function randomDate(range?: IDateRange): Date {
  range = typeof range === 'object' ? range : { from: new Date(0), to: new Date(Number.MAX_SAFE_INTEGER) };

  return new Date(randomNumber(+range.from, +range.to));
}
