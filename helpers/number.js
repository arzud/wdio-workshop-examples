/**
 * Returns a random number of a range that starts in min and ends in max.
 * @param {Integer} min the lower limit of the range
 * @param {Integer} max the upper limit of the range
 */
export function getRandomInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
