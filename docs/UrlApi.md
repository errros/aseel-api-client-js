# FastApi.UrlApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateOrDeactivateUrlApiV1AdminUrlUrlIdActivatePut**](UrlApi.md#activateOrDeactivateUrlApiV1AdminUrlUrlIdActivatePut) | **PUT** /api/v1/admin/url/{url_id}/activate | Activate Or Deactivate Url
[**deleteUrlApiV1AdminUrlUrlIdDelete**](UrlApi.md#deleteUrlApiV1AdminUrlUrlIdDelete) | **DELETE** /api/v1/admin/url/{url_id} | Delete Url
[**getUrlApiV1AdminUrlUrlIdGet**](UrlApi.md#getUrlApiV1AdminUrlUrlIdGet) | **GET** /api/v1/admin/url/{url_id} | Get Url
[**getUrlsApiV1AdminUrlGet**](UrlApi.md#getUrlsApiV1AdminUrlGet) | **GET** /api/v1/admin/url/ | Get Urls
[**newUrlApiV1AdminUrlPost**](UrlApi.md#newUrlApiV1AdminUrlPost) | **POST** /api/v1/admin/url/ | New Url
[**updateUrlApiV1AdminUrlUrlIdPut**](UrlApi.md#updateUrlApiV1AdminUrlUrlIdPut) | **PUT** /api/v1/admin/url/{url_id} | Update Url



## activateOrDeactivateUrlApiV1AdminUrlUrlIdActivatePut

> activateOrDeactivateUrlApiV1AdminUrlUrlIdActivatePut(urlId)

Activate Or Deactivate Url

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.UrlApi();
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


## deleteUrlApiV1AdminUrlUrlIdDelete

> deleteUrlApiV1AdminUrlUrlIdDelete(urlId)

Delete Url

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.UrlApi();
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


## getUrlApiV1AdminUrlUrlIdGet

> getUrlApiV1AdminUrlUrlIdGet(urlId)

Get Url

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.UrlApi();
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

let apiInstance = new FastApi.UrlApi();
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


## newUrlApiV1AdminUrlPost

> newUrlApiV1AdminUrlPost(uRLCreateUpdate)

New Url

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.UrlApi();
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


## updateUrlApiV1AdminUrlUrlIdPut

> updateUrlApiV1AdminUrlUrlIdPut(urlId, uRLCreateUpdate)

Update Url

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.UrlApi();
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

