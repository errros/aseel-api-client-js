# FastApi.UserApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUrlPlaylistsApiV1UserUrlUrlCodeGet**](UserApi.md#getUrlPlaylistsApiV1UserUrlUrlCodeGet) | **GET** /api/v1/user/url/{url_code} | Get Url Playlists
[**getUserRatingApiV1UserPlaylistSpotifyPlaylistIdRatingGet**](UserApi.md#getUserRatingApiV1UserPlaylistSpotifyPlaylistIdRatingGet) | **GET** /api/v1/user/playlist/{spotify_playlist_id}/rating | Get User Rating
[**rateOrUpdateRatingApiV1UserPlaylistSpotifyPlaylistIdRatePost**](UserApi.md#rateOrUpdateRatingApiV1UserPlaylistSpotifyPlaylistIdRatePost) | **POST** /api/v1/user/playlist/{spotify_playlist_id}/rate | Rate Or Update Rating



## getUrlPlaylistsApiV1UserUrlUrlCodeGet

> getUrlPlaylistsApiV1UserUrlUrlCodeGet(urlCode)

Get Url Playlists

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.UserApi();
let urlCode = "urlCode_example"; // String | 
apiInstance.getUrlPlaylistsApiV1UserUrlUrlCodeGet(urlCode, (error, data, response) => {
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
 **urlCode** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserRatingApiV1UserPlaylistSpotifyPlaylistIdRatingGet

> getUserRatingApiV1UserPlaylistSpotifyPlaylistIdRatingGet(spotifyPlaylistId)

Get User Rating

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.UserApi();
let spotifyPlaylistId = "spotifyPlaylistId_example"; // String | 
apiInstance.getUserRatingApiV1UserPlaylistSpotifyPlaylistIdRatingGet(spotifyPlaylistId, (error, data, response) => {
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
 **spotifyPlaylistId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## rateOrUpdateRatingApiV1UserPlaylistSpotifyPlaylistIdRatePost

> rateOrUpdateRatingApiV1UserPlaylistSpotifyPlaylistIdRatePost(spotifyPlaylistId, ratingSchema)

Rate Or Update Rating

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.UserApi();
let spotifyPlaylistId = "spotifyPlaylistId_example"; // String | 
let ratingSchema = new FastApi.RatingSchema(); // RatingSchema | 
apiInstance.rateOrUpdateRatingApiV1UserPlaylistSpotifyPlaylistIdRatePost(spotifyPlaylistId, ratingSchema, (error, data, response) => {
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
 **spotifyPlaylistId** | **String**|  | 
 **ratingSchema** | [**RatingSchema**](RatingSchema.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

