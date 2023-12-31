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


import ApiClient from "../ApiClient";
import HTTPValidationError from '../model/HTTPValidationError';
import URLCreateUpdate from '../model/URLCreateUpdate';

/**
* Url service.
* @module api/UrlApi
* @version 0.1.0
*/
export default class UrlApi {

    /**
    * Constructs a new UrlApi. 
    * @alias module:api/UrlApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the activateOrDeactivateUrlApiV1AdminUrlUrlIdActivatePut operation.
     * @callback module:api/UrlApi~activateOrDeactivateUrlApiV1AdminUrlUrlIdActivatePutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Activate Or Deactivate Url
     * @param {Number} urlId 
     * @param {module:api/UrlApi~activateOrDeactivateUrlApiV1AdminUrlUrlIdActivatePutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    activateOrDeactivateUrlApiV1AdminUrlUrlIdActivatePut(urlId, callback) {
      let postBody = null;
      // verify the required parameter 'urlId' is set
      if (urlId === undefined || urlId === null) {
        throw new Error("Missing the required parameter 'urlId' when calling activateOrDeactivateUrlApiV1AdminUrlUrlIdActivatePut");
      }

      let pathParams = {
        'url_id': urlId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/admin/url/{url_id}/activate', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUrlApiV1AdminUrlUrlIdDelete operation.
     * @callback module:api/UrlApi~deleteUrlApiV1AdminUrlUrlIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Url
     * @param {Number} urlId 
     * @param {module:api/UrlApi~deleteUrlApiV1AdminUrlUrlIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteUrlApiV1AdminUrlUrlIdDelete(urlId, callback) {
      let postBody = null;
      // verify the required parameter 'urlId' is set
      if (urlId === undefined || urlId === null) {
        throw new Error("Missing the required parameter 'urlId' when calling deleteUrlApiV1AdminUrlUrlIdDelete");
      }

      let pathParams = {
        'url_id': urlId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/admin/url/{url_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUrlApiV1AdminUrlUrlIdGet operation.
     * @callback module:api/UrlApi~getUrlApiV1AdminUrlUrlIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Url
     * @param {Number} urlId 
     * @param {module:api/UrlApi~getUrlApiV1AdminUrlUrlIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getUrlApiV1AdminUrlUrlIdGet(urlId, callback) {
      let postBody = null;
      // verify the required parameter 'urlId' is set
      if (urlId === undefined || urlId === null) {
        throw new Error("Missing the required parameter 'urlId' when calling getUrlApiV1AdminUrlUrlIdGet");
      }

      let pathParams = {
        'url_id': urlId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/admin/url/{url_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUrlsApiV1AdminUrlGet operation.
     * @callback module:api/UrlApi~getUrlsApiV1AdminUrlGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Urls
     * @param {Object} opts Optional parameters
     * @param {Number} [start = 0)] 
     * @param {Number} [limit = 20)] 
     * @param {module:api/UrlApi~getUrlsApiV1AdminUrlGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getUrlsApiV1AdminUrlGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'start': opts['start'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/admin/url/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the newUrlApiV1AdminUrlPost operation.
     * @callback module:api/UrlApi~newUrlApiV1AdminUrlPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * New Url
     * @param {module:model/URLCreateUpdate} uRLCreateUpdate 
     * @param {module:api/UrlApi~newUrlApiV1AdminUrlPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    newUrlApiV1AdminUrlPost(uRLCreateUpdate, callback) {
      let postBody = uRLCreateUpdate;
      // verify the required parameter 'uRLCreateUpdate' is set
      if (uRLCreateUpdate === undefined || uRLCreateUpdate === null) {
        throw new Error("Missing the required parameter 'uRLCreateUpdate' when calling newUrlApiV1AdminUrlPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/admin/url/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUrlApiV1AdminUrlUrlIdPut operation.
     * @callback module:api/UrlApi~updateUrlApiV1AdminUrlUrlIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Url
     * @param {Number} urlId 
     * @param {module:model/URLCreateUpdate} uRLCreateUpdate 
     * @param {module:api/UrlApi~updateUrlApiV1AdminUrlUrlIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateUrlApiV1AdminUrlUrlIdPut(urlId, uRLCreateUpdate, callback) {
      let postBody = uRLCreateUpdate;
      // verify the required parameter 'urlId' is set
      if (urlId === undefined || urlId === null) {
        throw new Error("Missing the required parameter 'urlId' when calling updateUrlApiV1AdminUrlUrlIdPut");
      }
      // verify the required parameter 'uRLCreateUpdate' is set
      if (uRLCreateUpdate === undefined || uRLCreateUpdate === null) {
        throw new Error("Missing the required parameter 'uRLCreateUpdate' when calling updateUrlApiV1AdminUrlUrlIdPut");
      }

      let pathParams = {
        'url_id': urlId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/admin/url/{url_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
