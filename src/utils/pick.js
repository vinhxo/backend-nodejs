/**
 * Create an object composed of the picked object properties
 * @param {Object} object
 * @param {string[]} keys
 * @returns {Object}
 */

//pick(req.query, ['name', 'role'])
const pick = (object, keys) => {
  return keys.reduce((obj, key) => {
    // Check req.bod consist key or not
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
};

module.exports = pick;
