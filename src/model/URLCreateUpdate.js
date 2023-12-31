/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The URLCreateUpdate model module.
 * @module model/URLCreateUpdate
 * @version 0.1.0
 */
class URLCreateUpdate {
    /**
     * Constructs a new <code>URLCreateUpdate</code>.
     * @alias module:model/URLCreateUpdate
     */
    constructor() { 
        
        URLCreateUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>URLCreateUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/URLCreateUpdate} obj Optional instance to populate.
     * @return {module:model/URLCreateUpdate} The populated <code>URLCreateUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new URLCreateUpdate();

            if (data.hasOwnProperty('playlists_ids')) {
                obj['playlists_ids'] = ApiClient.convertToType(data['playlists_ids'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>URLCreateUpdate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>URLCreateUpdate</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['playlists_ids'])) {
            throw new Error("Expected the field `playlists_ids` to be an array in the JSON data but got " + data['playlists_ids']);
        }

        return true;
    }


}



/**
 * @member {Array.<Number>} playlists_ids
 */
URLCreateUpdate.prototype['playlists_ids'] = undefined;






export default URLCreateUpdate;

