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
 * The PlaylistCreate model module.
 * @module model/PlaylistCreate
 * @version 0.1.0
 */
class PlaylistCreate {
    /**
     * Constructs a new <code>PlaylistCreate</code>.
     * @alias module:model/PlaylistCreate
     * @param name {String} 
     */
    constructor(name) { 
        
        PlaylistCreate.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>PlaylistCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PlaylistCreate} obj Optional instance to populate.
     * @return {module:model/PlaylistCreate} The populated <code>PlaylistCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlaylistCreate();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('genre')) {
                obj['genre'] = ApiClient.convertToType(data['genre'], 'String');
            }
            if (data.hasOwnProperty('ordered_tracks_spotify_ids')) {
                obj['ordered_tracks_spotify_ids'] = ApiClient.convertToType(data['ordered_tracks_spotify_ids'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PlaylistCreate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PlaylistCreate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PlaylistCreate.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['genre'] && !(typeof data['genre'] === 'string' || data['genre'] instanceof String)) {
            throw new Error("Expected the field `genre` to be a primitive type in the JSON string but got " + data['genre']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['ordered_tracks_spotify_ids'])) {
            throw new Error("Expected the field `ordered_tracks_spotify_ids` to be an array in the JSON data but got " + data['ordered_tracks_spotify_ids']);
        }

        return true;
    }


}

PlaylistCreate.RequiredProperties = ["name"];

/**
 * @member {String} name
 */
PlaylistCreate.prototype['name'] = undefined;

/**
 * @member {String} genre
 * @default ''
 */
PlaylistCreate.prototype['genre'] = '';

/**
 * @member {Array.<String>} ordered_tracks_spotify_ids
 */
PlaylistCreate.prototype['ordered_tracks_spotify_ids'] = undefined;






export default PlaylistCreate;

