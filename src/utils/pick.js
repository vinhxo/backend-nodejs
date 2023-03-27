/**
 * Create an object composed of the picked object properties
 * @param {Object} object
 * @param {string[]} keys
 * @returns {Object}
 */

//read attribute name and role of query and save to obj
//pick(req.query, ['name', 'role'])
const pick = (object, keys) => {
  return keys.reduce((obj, key) => {
    // Check req.query consist key or not
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
};

module.exports = pick;
