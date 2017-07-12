/**
 * The Malooch API
 * Auto genertaed Malooch API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

    // CommonJS-like environments that support module.exports, like Node.
    const ApiClient = require('../ApiClient')
    





  /**
   * The NotAuthorizedError model module.
   * @module model/NotAuthorizedError
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>NotAuthorizedError</code>.
   * @alias module:model/NotAuthorizedError
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>NotAuthorizedError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotAuthorizedError} obj Optional instance to populate.
   * @return {module:model/NotAuthorizedError} The populated <code>NotAuthorizedError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('params')) {
        obj['params'] = ApiClient.convertToType(data['params'], ['String']);
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} params
   */
  exports.prototype['params'] = undefined;
  /**
   * @member {String} text
   */
  exports.prototype['text'] = undefined;



  module.exports = exports;



