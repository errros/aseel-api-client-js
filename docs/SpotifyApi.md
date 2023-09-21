# FastApi.SpotifyApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callbackApiV1CallbackGet**](SpotifyApi.md#callbackApiV1CallbackGet) | **GET** /api/v1/callback | Callback
[**loginApiV1LoginGet**](SpotifyApi.md#loginApiV1LoginGet) | **GET** /api/v1/login | Login



## callbackApiV1CallbackGet

> callbackApiV1CallbackGet(code)

Callback

Callback defined in the Spotify App

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.SpotifyApi();
let code = "code_example"; // String | 
apiInstance.callbackApiV1CallbackGet(code, (error, data, response) => {
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
 **code** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## loginApiV1LoginGet

> loginApiV1LoginGet()

Login

Initiates the Spotify authentication process

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.SpotifyApi();
apiInstance.loginApiV1LoginGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

