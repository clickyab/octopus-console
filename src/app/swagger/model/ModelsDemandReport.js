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
   * The ModelsDemandReport model module.
   * @module model/ModelsDemandReport
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsDemandReport</code>.
   * @alias module:model/ModelsDemandReport
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>ModelsDemandReport</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsDemandReport} obj Optional instance to populate.
   * @return {module:model/ModelsDemandReport} The populated <code>ModelsDemandReport</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ad_in_count')) {
        obj['ad_in_count'] = ApiClient.convertToType(data['ad_in_count'], 'Integer');
      }
      if (data.hasOwnProperty('ad_out_bid')) {
        obj['ad_out_bid'] = ApiClient.convertToType(data['ad_out_bid'], 'Integer');
      }
      if (data.hasOwnProperty('ad_out_count')) {
        obj['ad_out_count'] = ApiClient.convertToType(data['ad_out_count'], 'Integer');
      }
      if (data.hasOwnProperty('deliver_bid')) {
        obj['deliver_bid'] = ApiClient.convertToType(data['deliver_bid'], 'Integer');
      }
      if (data.hasOwnProperty('deliver_count')) {
        obj['deliver_count'] = ApiClient.convertToType(data['deliver_count'], 'Integer');
      }
      if (data.hasOwnProperty('deliver_rate')) {
        obj['deliver_rate'] = ApiClient.convertToType(data['deliver_rate'], 'Integer');
      }
      if (data.hasOwnProperty('demand')) {
        obj['demand'] = ApiClient.convertToType(data['demand'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('imp_out_count')) {
        obj['imp_out_count'] = ApiClient.convertToType(data['imp_out_count'], 'Integer');
      }
      if (data.hasOwnProperty('profit')) {
        obj['profit'] = ApiClient.convertToType(data['profit'], 'Integer');
      }
      if (data.hasOwnProperty('request_out_count')) {
        obj['request_out_count'] = ApiClient.convertToType(data['request_out_count'], 'Integer');
      }
      if (data.hasOwnProperty('success_rate')) {
        obj['success_rate'] = ApiClient.convertToType(data['success_rate'], 'Integer');
      }
      if (data.hasOwnProperty('target_date')) {
        obj['target_date'] = ApiClient.convertToType(data['target_date'], 'String');
      }
      if (data.hasOwnProperty('win_rate')) {
        obj['win_rate'] = ApiClient.convertToType(data['win_rate'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} ad_in_count
   */
  exports.prototype['ad_in_count'] = undefined;
  /**
   * @member {Integer} ad_out_bid
   */
  exports.prototype['ad_out_bid'] = undefined;
  /**
   * @member {Integer} ad_out_count
   */
  exports.prototype['ad_out_count'] = undefined;
  /**
   * @member {Integer} deliver_bid
   */
  exports.prototype['deliver_bid'] = undefined;
  /**
   * @member {Integer} deliver_count
   */
  exports.prototype['deliver_count'] = undefined;
  /**
   * @member {Integer} deliver_rate
   */
  exports.prototype['deliver_rate'] = undefined;
  /**
   * @member {String} demand
   */
  exports.prototype['demand'] = undefined;
  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Integer} imp_out_count
   */
  exports.prototype['imp_out_count'] = undefined;
  /**
   * @member {Integer} profit
   */
  exports.prototype['profit'] = undefined;
  /**
   * @member {Integer} request_out_count
   */
  exports.prototype['request_out_count'] = undefined;
  /**
   * @member {Integer} success_rate
   */
  exports.prototype['success_rate'] = undefined;
  /**
   * @member {String} target_date
   */
  exports.prototype['target_date'] = undefined;
  /**
   * @member {Integer} win_rate
   */
  exports.prototype['win_rate'] = undefined;



  module.exports = exports;



