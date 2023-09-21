# FastApi.PlaylistApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletePlaylistApiV1AdminPlaylistPlaylistIdDelete**](PlaylistApi.md#deletePlaylistApiV1AdminPlaylistPlaylistIdDelete) | **DELETE** /api/v1/admin/playlist/{playlist_id} | Delete Playlist
[**getPlaylistApiV1AdminPlaylistPlaylistIdGet**](PlaylistApi.md#getPlaylistApiV1AdminPlaylistPlaylistIdGet) | **GET** /api/v1/admin/playlist/{playlist_id} | Get Playlist
[**getPlaylistsApiV1AdminPlaylistGet**](PlaylistApi.md#getPlaylistsApiV1AdminPlaylistGet) | **GET** /api/v1/admin/playlist/ | Get Playlists
[**newPlaylistApiV1AdminPlaylistPost**](PlaylistApi.md#newPlaylistApiV1AdminPlaylistPost) | **POST** /api/v1/admin/playlist/ | New Playlist
[**updateCoverImageApiV1AdminPlaylistPlaylistIdCoverImagePut**](PlaylistApi.md#updateCoverImageApiV1AdminPlaylistPlaylistIdCoverImagePut) | **PUT** /api/v1/admin/playlist/{playlist_id}/cover-image | Update Cover Image
[**updatePlaylistApiV1AdminPlaylistPlaylistIdPut**](PlaylistApi.md#updatePlaylistApiV1AdminPlaylistPlaylistIdPut) | **PUT** /api/v1/admin/playlist/{playlist_id} | Update Playlist



## deletePlaylistApiV1AdminPlaylistPlaylistIdDelete

> deletePlaylistApiV1AdminPlaylistPlaylistIdDelete(playlistId)

Delete Playlist

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.PlaylistApi();
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


## getPlaylistApiV1AdminPlaylistPlaylistIdGet

> getPlaylistApiV1AdminPlaylistPlaylistIdGet(playlistId)

Get Playlist

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.PlaylistApi();
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

let apiInstance = new FastApi.PlaylistApi();
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


## newPlaylistApiV1AdminPlaylistPost

> newPlaylistApiV1AdminPlaylistPost(playlistCreate)

New Playlist

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.PlaylistApi();
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


## updateCoverImageApiV1AdminPlaylistPlaylistIdCoverImagePut

> updateCoverImageApiV1AdminPlaylistPlaylistIdCoverImagePut(playlistId, coverFile)

Update Cover Image

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.PlaylistApi();
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

let apiInstance = new FastApi.PlaylistApi();
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

