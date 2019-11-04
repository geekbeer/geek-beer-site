/**
 * Returns true or false.
 * @param {any} value 
 */
export function isDefined(value) {
  return value !== undefined && value !== null;
}

/**
 * Returns value or fallback.
 * @param {any} value
 * @param {string} [elseValue='']
 */
export function getOrElse(value, elseValue = '') {
  return isDefined(value) ? value : elseValue;
}
