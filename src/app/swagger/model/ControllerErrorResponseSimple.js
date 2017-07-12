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
    , NotAuthorizedError = require('./NotAuthorizedError')





  /**
   * The ControllerErrorResponseSimple model module.
   * @module model/ControllerErrorResponseSimple
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ControllerErrorResponseSimple</code>.
   * @alias module:model/ControllerErrorResponseSimple
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ControllerErrorResponseSimple</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ControllerErrorResponseSimple} obj Optional instance to populate.
   * @return {module:model/ControllerErrorResponseSimple} The populated <code>ControllerErrorResponseSimple</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('error')) {
        obj['error'] = NotAuthorizedError.constructFromObject(data['error']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/NotAuthorizedError} error
   */
  exports.prototype['error'] = undefined;



  module.exports = exports;



