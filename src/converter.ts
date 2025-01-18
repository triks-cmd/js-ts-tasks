type Unit = 'm' | 'mi' | 'gr' | 'pound' | 'C' | 'K';

const conversionRates: { [key: string]: number | ((value: number) => number) } = {
  'm-mi': 1 / 1609.34,
  'mi-m': 1609.34,
  'gr-pound': 1 / 453.592,
  'pound-gr': 453.592,
  'C-K': (value: number) => value + 273.15,
  'K-C': (value: number) => value - 273.15,
};

module.exports.converter = function (value: number, from: Unit, to: Unit): number {
  if (typeof value !== 'number' || isNaN(value)) throw new Error('Value must be a valid number');
  if (from === to) return parseFloat(value.toFixed(2));

  const key = `${from}-${to}`;
  const conversionRate = conversionRates[key];

  if (!conversionRate) throw new Error(`Conversion from ${from} to ${to} is not supported`);

  const result = typeof conversionRate === 'function' ? (conversionRate as (value: number) => number)(value) : value * conversionRate;
  return parseFloat(result.toFixed(2));
};
