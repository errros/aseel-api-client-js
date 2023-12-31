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
import PlaylistCreate from '../model/PlaylistCreate';
import PlaylistUpdate from '../model/PlaylistUpdate';
import URLCreateUpdate from '../model/URLCreateUpdate';

/**
* Admin service.
* @module api/AdminApi
* @version 0.1.0
*/
export default class AdminApi {

    /**
    * Constructs a new AdminApi. 
    * @alias module:api/AdminApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the activateOrDeactivateUrlApiV1AdminUrlUrlIdActivatePut operation.
     * @callback module:api/AdminApi~activateOrDeactivateUrlApiV1AdminUrlUrlIdActivatePutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Activate Or Deactivate Url
     * @param {Number} urlId 
     * @param {module:api/AdminApi~activateOrDeactivateUrlApiV1AdminUrlUrlIdActivatePutCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the deletePlaylistApiV1AdminPlaylistPlaylistIdDelete operation.
     * @callback module:api/AdminApi~deletePlaylistApiV1AdminPlaylistPlaylistIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Playlist
     * @param {Number} playlistId 
     * @param {module:api/AdminApi~deletePlaylistApiV1AdminPlaylistPlaylistIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deletePlaylistApiV1AdminPlaylistPlaylistIdDelete(playlistId, callback) {
      let postBody = null;
      // verify the required parameter 'playlistId' is set
      if (playlistId === undefined || playlistId === null) {
        throw new Error("Missing the required parameter 'playlistId' when calling deletePlaylistApiV1AdminPlaylistPlaylistIdDelete");
      }

      let pathParams = {
        'playlist_id': playlistId
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
        '/api/v1/admin/playlist/{playlist_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUrlApiV1AdminUrlUrlIdDelete operation.
     * @callback module:api/AdminApi~deleteUrlApiV1AdminUrlUrlIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Url
     * @param {Number} urlId 
     * @param {module:api/AdminApi~deleteUrlApiV1AdminUrlUrlIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the getPlaylistApiV1AdminPlaylistPlaylistIdGet operation.
     * @callback module:api/AdminApi~getPlaylistApiV1AdminPlaylistPlaylistIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Playlist
     * @param {Number} playlistId 
     * @param {module:api/AdminApi~getPlaylistApiV1AdminPlaylistPlaylistIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getPlaylistApiV1AdminPlaylistPlaylistIdGet(playlistId, callback) {
      let postBody = null;
      // verify the required parameter 'playlistId' is set
      if (playlistId === undefined || playlistId === null) {
        throw new Error("Missing the required parameter 'playlistId' when calling getPlaylistApiV1AdminPlaylistPlaylistIdGet");
      }

      let pathParams = {
        'playlist_id': playlistId
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
        '/api/v1/admin/playlist/{playlist_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPlaylistsApiV1AdminPlaylistGet operation.
     * @callback module:api/AdminApi~getPlaylistsApiV1AdminPlaylistGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Playlists
     * @param {Object} opts Optional parameters
     * @param {Number} [start = 0)] 
     * @param {Number} [limit = 20)] 
     * @param {module:api/AdminApi~getPlaylistsApiV1AdminPlaylistGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getPlaylistsApiV1AdminPlaylistGet(opts, callback) {
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
        '/api/v1/admin/playlist/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUrlApiV1AdminUrlUrlIdGet operation.
     * @callback module:api/AdminApi~getUrlApiV1AdminUrlUrlIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Url
     * @param {Number} urlId 
     * @param {module:api/AdminApi~getUrlApiV1AdminUrlUrlIdGetCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/AdminApi~getUrlsApiV1AdminUrlGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Urls
     * @param {Object} opts Optional parameters
     * @param {Number} [start = 0)] 
     * @param {Number} [limit = 20)] 
     * @param {module:api/AdminApi~getUrlsApiV1AdminUrlGetCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the newPlaylistApiV1AdminPlaylistPost operation.
     * @callback module:api/AdminApi~newPlaylistApiV1AdminPlaylistPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * New Playlist
     * @param {module:model/PlaylistCreate} playlistCreate 
     * @param {module:api/AdminApi~newPlaylistApiV1AdminPlaylistPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    newPlaylistApiV1AdminPlaylistPost(playlistCreate, callback) {
      let postBody = playlistCreate;
      // verify the required parameter 'playlistCreate' is set
      if (playlistCreate === undefined || playlistCreate === null) {
        throw new Error("Missing the required parameter 'playlistCreate' when calling newPlaylistApiV1AdminPlaylistPost");
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
        '/api/v1/admin/playlist/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the newUrlApiV1AdminUrlPost operation.
     * @callback module:api/AdminApi~newUrlApiV1AdminUrlPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * New Url
     * @param {module:model/URLCreateUpdate} uRLCreateUpdate 
     * @param {module:api/AdminApi~newUrlApiV1AdminUrlPostCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the updateCoverImageApiV1AdminPlaylistPlaylistIdCoverImagePut operation.
     * @callback module:api/AdminApi~updateCoverImageApiV1AdminPlaylistPlaylistIdCoverImagePutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Cover Image
     * @param {Number} playlistId 
     * @param {File} coverFile 
     * @param {module:api/AdminApi~updateCoverImageApiV1AdminPlaylistPlaylistIdCoverImagePutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateCoverImageApiV1AdminPlaylistPlaylistIdCoverImagePut(playlistId, coverFile, callback) {
      let postBody = null;
      // verify the required parameter 'playlistId' is set
      if (playlistId === undefined || playlistId === null) {
        throw new Error("Missing the required parameter 'playlistId' when calling updateCoverImageApiV1AdminPlaylistPlaylistIdCoverImagePut");
      }
      // verify the required parameter 'coverFile' is set
      if (coverFile === undefined || coverFile === null) {
        throw new Error("Missing the required parameter 'coverFile' when calling updateCoverImageApiV1AdminPlaylistPlaylistIdCoverImagePut");
      }

      let pathParams = {
        'playlist_id': playlistId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'cover_file': coverFile
      };

      let authNames = [];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/admin/playlist/{playlist_id}/cover-image', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePlaylistApiV1AdminPlaylistPlaylistIdPut operation.
     * @callback module:api/AdminApi~updatePlaylistApiV1AdminPlaylistPlaylistIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Playlist
     * @param {Number} playlistId 
     * @param {module:model/PlaylistUpdate} playlistUpdate 
     * @param {module:api/AdminApi~updatePlaylistApiV1AdminPlaylistPlaylistIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updatePlaylistApiV1AdminPlaylistPlaylistIdPut(playlistId, playlistUpdate, callback) {
      let postBody = playlistUpdate;
      // verify the required parameter 'playlistId' is set
      if (playlistId === undefined || playlistId === null) {
        throw new Error("Missing the required parameter 'playlistId' when calling updatePlaylistApiV1AdminPlaylistPlaylistIdPut");
      }
      // verify the required parameter 'playlistUpdate' is set
      if (playlistUpdate === undefined || playlistUpdate === null) {
        throw new Error("Missing the required parameter 'playlistUpdate' when calling updatePlaylistApiV1AdminPlaylistPlaylistIdPut");
      }

      let pathParams = {
        'playlist_id': playlistId
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
        '/api/v1/admin/playlist/{playlist_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUrlApiV1AdminUrlUrlIdPut operation.
     * @callback module:api/AdminApi~updateUrlApiV1AdminUrlUrlIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Url
     * @param {Number} urlId 
     * @param {module:model/URLCreateUpdate} uRLCreateUpdate 
     * @param {module:api/AdminApi~updateUrlApiV1AdminUrlUrlIdPutCallback} callback The callback function, accepting three arguments: error, data, response
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
