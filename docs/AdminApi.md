# FastApi.AdminApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateOrDeactivateUrlApiV1AdminUrlUrlIdActivatePut**](AdminApi.md#activateOrDeactivateUrlApiV1AdminUrlUrlIdActivatePut) | **PUT** /api/v1/admin/url/{url_id}/activate | Activate Or Deactivate Url
[**deletePlaylistApiV1AdminPlaylistPlaylistIdDelete**](AdminApi.md#deletePlaylistApiV1AdminPlaylistPlaylistIdDelete) | **DELETE** /api/v1/admin/playlist/{playlist_id} | Delete Playlist
[**deleteUrlApiV1AdminUrlUrlIdDelete**](AdminApi.md#deleteUrlApiV1AdminUrlUrlIdDelete) | **DELETE** /api/v1/admin/url/{url_id} | Delete Url
[**getPlaylistApiV1AdminPlaylistPlaylistIdGet**](AdminApi.md#getPlaylistApiV1AdminPlaylistPlaylistIdGet) | **GET** /api/v1/admin/playlist/{playlist_id} | Get Playlist
[**getPlaylistsApiV1AdminPlaylistGet**](AdminApi.md#getPlaylistsApiV1AdminPlaylistGet) | **GET** /api/v1/admin/playlist/ | Get Playlists
[**getUrlApiV1AdminUrlUrlIdGet**](AdminApi.md#getUrlApiV1AdminUrlUrlIdGet) | **GET** /api/v1/admin/url/{url_id} | Get Url
[**getUrlsApiV1AdminUrlGet**](AdminApi.md#getUrlsApiV1AdminUrlGet) | **GET** /api/v1/admin/url/ | Get Urls
[**newPlaylistApiV1AdminPlaylistPost**](AdminApi.md#newPlaylistApiV1AdminPlaylistPost) | **POST** /api/v1/admin/playlist/ | New Playlist
[**newUrlApiV1AdminUrlPost**](AdminApi.md#newUrlApiV1AdminUrlPost) | **POST** /api/v1/admin/url/ | New Url
[**updateCoverImageApiV1AdminPlaylistPlaylistIdCoverImagePut**](AdminApi.md#updateCoverImageApiV1AdminPlaylistPlaylistIdCoverImagePut) | **PUT** /api/v1/admin/playlist/{playlist_id}/cover-image | Update Cover Image
[**updatePlaylistApiV1AdminPlaylistPlaylistIdPut**](AdminApi.md#updatePlaylistApiV1AdminPlaylistPlaylistIdPut) | **PUT** /api/v1/admin/playlist/{playlist_id} | Update Playlist
[**updateUrlApiV1AdminUrlUrlIdPut**](AdminApi.md#updateUrlApiV1AdminUrlUrlIdPut) | **PUT** /api/v1/admin/url/{url_id} | Update Url



## activateOrDeactivateUrlApiV1AdminUrlUrlIdActivatePut

> activateOrDeactivateUrlApiV1AdminUrlUrlIdActivatePut(urlId)

Activate Or Deactivate Url

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.AdminApi();
let urlId = 56; // Number | 
apiInstance.activateOrDeactivateUrlApiV1AdminUrlUrlIdActivatePut(urlId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **urlId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deletePlaylistApiV1AdminPlaylistPlaylistIdDelete

> deletePlaylistApiV1AdminPlaylistPlaylistIdDelete(playlistId)

Delete Playlist

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.AdminApi();
let playlistId = 56; // Number | 
apiInstance.deletePlaylistApiV1AdminPlaylistPlaylistIdDelete(playlistId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playlistId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteUrlApiV1AdminUrlUrlIdDelete

> deleteUrlApiV1AdminUrlUrlIdDelete(urlId)

Delete Url

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.AdminApi();
let urlId = 56; // Number | 
apiInstance.deleteUrlApiV1AdminUrlUrlIdDelete(urlId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **urlId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPlaylistApiV1AdminPlaylistPlaylistIdGet

> getPlaylistApiV1AdminPlaylistPlaylistIdGet(playlistId)

Get Playlist

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.AdminApi();
let playlistId = 56; // Number | 
apiInstance.getPlaylistApiV1AdminPlaylistPlaylistIdGet(playlistId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playlistId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPlaylistsApiV1AdminPlaylistGet

> getPlaylistsApiV1AdminPlaylistGet(opts)

Get Playlists

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.AdminApi();
let opts = {
  'start': 0, // Number | 
  'limit': 20 // Number | 
};
apiInstance.getPlaylistsApiV1AdminPlaylistGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **Number**|  | [optional] [default to 0]
 **limit** | **Number**|  | [optional] [default to 20]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUrlApiV1AdminUrlUrlIdGet

> getUrlApiV1AdminUrlUrlIdGet(urlId)

Get Url

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.AdminApi();
let urlId = 56; // Number | 
apiInstance.getUrlApiV1AdminUrlUrlIdGet(urlId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **urlId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUrlsApiV1AdminUrlGet

> getUrlsApiV1AdminUrlGet(opts)

Get Urls

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.AdminApi();
let opts = {
  'start': 0, // Number | 
  'limit': 20 // Number | 
};
apiInstance.getUrlsApiV1AdminUrlGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **Number**|  | [optional] [default to 0]
 **limit** | **Number**|  | [optional] [default to 20]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## newPlaylistApiV1AdminPlaylistPost

> newPlaylistApiV1AdminPlaylistPost(playlistCreate)

New Playlist

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.AdminApi();
let playlistCreate = new FastApi.PlaylistCreate(); // PlaylistCreate | 
apiInstance.newPlaylistApiV1AdminPlaylistPost(playlistCreate, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playlistCreate** | [**PlaylistCreate**](PlaylistCreate.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## newUrlApiV1AdminUrlPost

> newUrlApiV1AdminUrlPost(uRLCreateUpdate)

New Url

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.AdminApi();
let uRLCreateUpdate = new FastApi.URLCreateUpdate(); // URLCreateUpdate | 
apiInstance.newUrlApiV1AdminUrlPost(uRLCreateUpdate, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uRLCreateUpdate** | [**URLCreateUpdate**](URLCreateUpdate.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCoverImageApiV1AdminPlaylistPlaylistIdCoverImagePut

> updateCoverImageApiV1AdminPlaylistPlaylistIdCoverImagePut(playlistId, coverFile)

Update Cover Image

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.AdminApi();
let playlistId = 56; // Number | 
let coverFile = "/path/to/file"; // File | 
apiInstance.updateCoverImageApiV1AdminPlaylistPlaylistIdCoverImagePut(playlistId, coverFile, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playlistId** | **Number**|  | 
 **coverFile** | **File**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## updatePlaylistApiV1AdminPlaylistPlaylistIdPut

> updatePlaylistApiV1AdminPlaylistPlaylistIdPut(playlistId, playlistUpdate)

Update Playlist

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.AdminApi();
let playlistId = 56; // Number | 
let playlistUpdate = new FastApi.PlaylistUpdate(); // PlaylistUpdate | 
apiInstance.updatePlaylistApiV1AdminPlaylistPlaylistIdPut(playlistId, playlistUpdate, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playlistId** | **Number**|  | 
 **playlistUpdate** | [**PlaylistUpdate**](PlaylistUpdate.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateUrlApiV1AdminUrlUrlIdPut

> updateUrlApiV1AdminUrlUrlIdPut(urlId, uRLCreateUpdate)

Update Url

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.AdminApi();
let urlId = 56; // Number | 
let uRLCreateUpdate = new FastApi.URLCreateUpdate(); // URLCreateUpdate | 
apiInstance.updateUrlApiV1AdminUrlUrlIdPut(urlId, uRLCreateUpdate, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **urlId** | **Number**|  | 
 **uRLCreateUpdate** | [**URLCreateUpdate**](URLCreateUpdate.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

