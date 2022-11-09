/**
 * Formats a noun as plural if the amount is greater than 1.
 *
 * @param singularStr - The noun's singular form
 * @param amount - The amount of the noun
 * @returns The formatted noun
 *
 * @example
 * // Prints "foo"
 * console.log(formatPlural('foo', 1));
 * // Prints "bars"
 * console.log(formatPlural('bar', 2));
 */
export const formatPlural = (singularStr: string, amount: number) => `${singularStr}${amount === 1 ? '' : 's'}`;

/**
 * Formats a noun as possessive.
 *
 * @param str - The noun
 * @returns The formatted noun
 *
 * @example
 * // Prints "John's"
 * console.log(formatPossessive('John'));
 * // Prints "Chris'"
 * console.log(formatPossessive('Chris'));
 */
export const formatPossessive = (str: string) => `${str}'${['s', 'z'].some(c => str.endsWith(c)) ? '' : 's'}`;

/**
 * Gets just the explicit keys from an enum without the reversed values.
 *
 * @param enumeration - A record with string keys and any value
 * @returns - The record's string keys
 */
export const getEnumKeys = (enumeration: Record<string, any>) => Object.keys(enumeration).filter(x => !(parseInt(x) >= 0));

/**
 * Gets a random integer between two inclusive values.
 *
 * @param min - The minimum number (inclusive)
 * @param max - The maximum number (exclusive)
 * @returns A random number inclusively between the min and max
 *
 * @example
 * // Can print 1, 2, or 3
 * console.log(getRandomInt(1, 3));
 */
export const getRandomInt = (min: number, max: number) => {
	min = Math.ceil(min);
	return Math.floor(Math.random() * (Math.floor(max) - min + 1)) + min;
};

/**
 * Gets a random item from an array.
 *
 * @param arr - An array containing any type
 * @returns A random item from the array
 *
 * // Can print "foo" or "bar"
 * console.log(getRandomItem(['foo', 'bar']));
 */
export const getRandomItem = <T>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

/**
 * Normalizes a string to make it more easily comparable.
 *
 * @param str - A string
 * @returns The normalized string
 *
 * @example
 * // Prints "fooandbar"
 * console.log(normalize('Foo, & BAR!'));
 */
export const normalize = (str: string) => str
	.toLowerCase()
	.normalize('NFD')
	.replace(/\p{Diacritic}/gu, '')
	.replaceAll('&', 'and')
	.replace(/[^0-9a-z]/gi, '');

/**
 * Creates an object with keys of an array's items and values of the quantity of each item in the array.
 *
 * @param arr - An array to receive a quantity of each item for
 * @returns An object with keys of each item and values of the item's quantity
 *
 * @example
 * // Prints "\{ foo: 3, bar: 2 \}"
 * console.log(quantify(['foo', 'bar', 'foo', 'foo', 'bar']));
 */
export const quantify = (arr: string[]) => {
	const initial: Record<string, number> = {};
	return arr.reduce((prev, curr) => {
		if (curr in prev) {
			prev[curr]++;
		}
		else {
			prev[curr] = 1;
		}
		return prev;
	}, initial);
};

/**
 * Removes duplicate items from an array.
 *
 * @param arr - An array containing any type
 * @returns - The array without duplicate items
 *
 * @example
 * // Prints "[1, 2, 3]"
 * console.log(removeDuplicates([1, 2, 2, 3, 3, 3]));
 */
export const removeDuplicates = <T>(arr: T[]) => Array.from(new Set(arr));

/**
 * Adds numerical values together.
 *
 * @param previous - The previous number to add onto
 * @param current - The current number
 * @returns - The sum of the previous and current numbers
 *
 * @example
 * // Prints "6"
 * console.log([1, 2, 3].reduce(sum, 0));
 */
export const sum = (previous: number, current: number) => previous + current;