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
   * The RoutesExchangeReportResponseData model module.
   * @module model/RoutesExchangeReportResponseData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RoutesExchangeReportResponseData</code>.
   * @alias module:model/RoutesExchangeReportResponseData
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>RoutesExchangeReportResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RoutesExchangeReportResponseData} obj Optional instance to populate.
   * @return {module:model/RoutesExchangeReportResponseData} The populated <code>RoutesExchangeReportResponseData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('demand_impression_in')) {
        obj['demand_impression_in'] = ApiClient.convertToType(data['demand_impression_in'], 'Integer');
      }
      if (data.hasOwnProperty('demand_impression_out')) {
        obj['demand_impression_out'] = ApiClient.convertToType(data['demand_impression_out'], 'Integer');
      }
      if (data.hasOwnProperty('earn')) {
        obj['earn'] = ApiClient.convertToType(data['earn'], 'Integer');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('income')) {
        obj['income'] = ApiClient.convertToType(data['income'], 'Integer');
      }
      if (data.hasOwnProperty('spent')) {
        obj['spent'] = ApiClient.convertToType(data['spent'], 'Integer');
      }
      if (data.hasOwnProperty('supplier_impression_in')) {
        obj['supplier_impression_in'] = ApiClient.convertToType(data['supplier_impression_in'], 'Integer');
      }
      if (data.hasOwnProperty('supplier_impression_out')) {
        obj['supplier_impression_out'] = ApiClient.convertToType(data['supplier_impression_out'], 'Integer');
      }
      if (data.hasOwnProperty('target_date')) {
        obj['target_date'] = ApiClient.convertToType(data['target_date'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} demand_impression_in
   */
  exports.prototype['demand_impression_in'] = undefined;
  /**
   * @member {Integer} demand_impression_out
   */
  exports.prototype['demand_impression_out'] = undefined;
  /**
   * @member {Integer} earn
   */
  exports.prototype['earn'] = undefined;
  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Integer} income
   */
  exports.prototype['income'] = undefined;
  /**
   * @member {Integer} spent
   */
  exports.prototype['spent'] = undefined;
  /**
   * @member {Integer} supplier_impression_in
   */
  exports.prototype['supplier_impression_in'] = undefined;
  /**
   * @member {Integer} supplier_impression_out
   */
  exports.prototype['supplier_impression_out'] = undefined;
  /**
   * @member {String} target_date
   */
  exports.prototype['target_date'] = undefined;



  module.exports = exports;



