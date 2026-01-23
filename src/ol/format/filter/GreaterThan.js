import ComparisonBinary from './ComparisonBinary.js';
/**
 * @module ol/format/filter/GreaterThan
 */
/**
 * @classdesc
 * Represents a `<PropertyIsGreaterThan>` comparison operator.
 * @api
 */
class GreaterThan extends ComparisonBinary {
  /**
   * @param {!string} propertyName Name of the context property to compare.
   * @param {!number} expression The value to compare.
   */
  constructor(propertyName, expression) {
    super('PropertyIsGreaterThan', propertyName, expression);
  }
}

export default GreaterThan;