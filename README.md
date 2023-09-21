# fast_api

FastApi - JavaScript client for fast_api
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 0.1.0
- Package version: 0.1.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install fast_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your fast_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var FastApi = require('fast_api');


var api = new FastApi.AdminApi()
var urlId = 56; // {Number} 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.activateOrDeactivateUrlApiV1AdminUrlUrlIdActivatePut(urlId, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*FastApi.AdminApi* | [**activateOrDeactivateUrlApiV1AdminUrlUrlIdActivatePut**](docs/AdminApi.md#activateOrDeactivateUrlApiV1AdminUrlUrlIdActivatePut) | **PUT** /api/v1/admin/url/{url_id}/activate | Activate Or Deactivate Url
*FastApi.AdminApi* | [**deletePlaylistApiV1AdminPlaylistPlaylistIdDelete**](docs/AdminApi.md#deletePlaylistApiV1AdminPlaylistPlaylistIdDelete) | **DELETE** /api/v1/admin/playlist/{playlist_id} | Delete Playlist
*FastApi.AdminApi* | [**deleteUrlApiV1AdminUrlUrlIdDelete**](docs/AdminApi.md#deleteUrlApiV1AdminUrlUrlIdDelete) | **DELETE** /api/v1/admin/url/{url_id} | Delete Url
*FastApi.AdminApi* | [**getPlaylistApiV1AdminPlaylistPlaylistIdGet**](docs/AdminApi.md#getPlaylistApiV1AdminPlaylistPlaylistIdGet) | **GET** /api/v1/admin/playlist/{playlist_id} | Get Playlist
*FastApi.AdminApi* | [**getPlaylistsApiV1AdminPlaylistGet**](docs/AdminApi.md#getPlaylistsApiV1AdminPlaylistGet) | **GET** /api/v1/admin/playlist/ | Get Playlists
*FastApi.AdminApi* | [**getUrlApiV1AdminUrlUrlIdGet**](docs/AdminApi.md#getUrlApiV1AdminUrlUrlIdGet) | **GET** /api/v1/admin/url/{url_id} | Get Url
*FastApi.AdminApi* | [**getUrlsApiV1AdminUrlGet**](docs/AdminApi.md#getUrlsApiV1AdminUrlGet) | **GET** /api/v1/admin/url/ | Get Urls
*FastApi.AdminApi* | [**newPlaylistApiV1AdminPlaylistPost**](docs/AdminApi.md#newPlaylistApiV1AdminPlaylistPost) | **POST** /api/v1/admin/playlist/ | New Playlist
*FastApi.AdminApi* | [**newUrlApiV1AdminUrlPost**](docs/AdminApi.md#newUrlApiV1AdminUrlPost) | **POST** /api/v1/admin/url/ | New Url
*FastApi.AdminApi* | [**updateCoverImageApiV1AdminPlaylistPlaylistIdCoverImagePut**](docs/AdminApi.md#updateCoverImageApiV1AdminPlaylistPlaylistIdCoverImagePut) | **PUT** /api/v1/admin/playlist/{playlist_id}/cover-image | Update Cover Image
*FastApi.AdminApi* | [**updatePlaylistApiV1AdminPlaylistPlaylistIdPut**](docs/AdminApi.md#updatePlaylistApiV1AdminPlaylistPlaylistIdPut) | **PUT** /api/v1/admin/playlist/{playlist_id} | Update Playlist
*FastApi.AdminApi* | [**updateUrlApiV1AdminUrlUrlIdPut**](docs/AdminApi.md#updateUrlApiV1AdminUrlUrlIdPut) | **PUT** /api/v1/admin/url/{url_id} | Update Url
*FastApi.DefaultApi* | [**readRootGet**](docs/DefaultApi.md#readRootGet) | **GET** / | Read Root
*FastApi.PlaylistApi* | [**deletePlaylistApiV1AdminPlaylistPlaylistIdDelete**](docs/PlaylistApi.md#deletePlaylistApiV1AdminPlaylistPlaylistIdDelete) | **DELETE** /api/v1/admin/playlist/{playlist_id} | Delete Playlist
*FastApi.PlaylistApi* | [**getPlaylistApiV1AdminPlaylistPlaylistIdGet**](docs/PlaylistApi.md#getPlaylistApiV1AdminPlaylistPlaylistIdGet) | **GET** /api/v1/admin/playlist/{playlist_id} | Get Playlist
*FastApi.PlaylistApi* | [**getPlaylistsApiV1AdminPlaylistGet**](docs/PlaylistApi.md#getPlaylistsApiV1AdminPlaylistGet) | **GET** /api/v1/admin/playlist/ | Get Playlists
*FastApi.PlaylistApi* | [**newPlaylistApiV1AdminPlaylistPost**](docs/PlaylistApi.md#newPlaylistApiV1AdminPlaylistPost) | **POST** /api/v1/admin/playlist/ | New Playlist
*FastApi.PlaylistApi* | [**updateCoverImageApiV1AdminPlaylistPlaylistIdCoverImagePut**](docs/PlaylistApi.md#updateCoverImageApiV1AdminPlaylistPlaylistIdCoverImagePut) | **PUT** /api/v1/admin/playlist/{playlist_id}/cover-image | Update Cover Image
*FastApi.PlaylistApi* | [**updatePlaylistApiV1AdminPlaylistPlaylistIdPut**](docs/PlaylistApi.md#updatePlaylistApiV1AdminPlaylistPlaylistIdPut) | **PUT** /api/v1/admin/playlist/{playlist_id} | Update Playlist
*FastApi.SpotifyApi* | [**callbackApiV1CallbackGet**](docs/SpotifyApi.md#callbackApiV1CallbackGet) | **GET** /api/v1/callback | Callback
*FastApi.SpotifyApi* | [**loginApiV1LoginGet**](docs/SpotifyApi.md#loginApiV1LoginGet) | **GET** /api/v1/login | Login
*FastApi.UrlApi* | [**activateOrDeactivateUrlApiV1AdminUrlUrlIdActivatePut**](docs/UrlApi.md#activateOrDeactivateUrlApiV1AdminUrlUrlIdActivatePut) | **PUT** /api/v1/admin/url/{url_id}/activate | Activate Or Deactivate Url
*FastApi.UrlApi* | [**deleteUrlApiV1AdminUrlUrlIdDelete**](docs/UrlApi.md#deleteUrlApiV1AdminUrlUrlIdDelete) | **DELETE** /api/v1/admin/url/{url_id} | Delete Url
*FastApi.UrlApi* | [**getUrlApiV1AdminUrlUrlIdGet**](docs/UrlApi.md#getUrlApiV1AdminUrlUrlIdGet) | **GET** /api/v1/admin/url/{url_id} | Get Url
*FastApi.UrlApi* | [**getUrlsApiV1AdminUrlGet**](docs/UrlApi.md#getUrlsApiV1AdminUrlGet) | **GET** /api/v1/admin/url/ | Get Urls
*FastApi.UrlApi* | [**newUrlApiV1AdminUrlPost**](docs/UrlApi.md#newUrlApiV1AdminUrlPost) | **POST** /api/v1/admin/url/ | New Url
*FastApi.UrlApi* | [**updateUrlApiV1AdminUrlUrlIdPut**](docs/UrlApi.md#updateUrlApiV1AdminUrlUrlIdPut) | **PUT** /api/v1/admin/url/{url_id} | Update Url
*FastApi.UserApi* | [**getUrlPlaylistsApiV1UserUrlUrlCodeGet**](docs/UserApi.md#getUrlPlaylistsApiV1UserUrlUrlCodeGet) | **GET** /api/v1/user/url/{url_code} | Get Url Playlists
*FastApi.UserApi* | [**getUserRatingApiV1UserPlaylistSpotifyPlaylistIdRatingGet**](docs/UserApi.md#getUserRatingApiV1UserPlaylistSpotifyPlaylistIdRatingGet) | **GET** /api/v1/user/playlist/{spotify_playlist_id}/rating | Get User Rating
*FastApi.UserApi* | [**rateOrUpdateRatingApiV1UserPlaylistSpotifyPlaylistIdRatePost**](docs/UserApi.md#rateOrUpdateRatingApiV1UserPlaylistSpotifyPlaylistIdRatePost) | **POST** /api/v1/user/playlist/{spotify_playlist_id}/rate | Rate Or Update Rating


## Documentation for Models

 - [FastApi.HTTPValidationError](docs/HTTPValidationError.md)
 - [FastApi.PlaylistCreate](docs/PlaylistCreate.md)
 - [FastApi.PlaylistUpdate](docs/PlaylistUpdate.md)
 - [FastApi.RatingSchema](docs/RatingSchema.md)
 - [FastApi.URLCreateUpdate](docs/URLCreateUpdate.md)
 - [FastApi.ValidationError](docs/ValidationError.md)
 - [FastApi.ValidationErrorLocInner](docs/ValidationErrorLocInner.md)


## Documentation for Authorization

Endpoints do not require authorization.

