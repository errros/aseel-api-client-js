# FastApi.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**readRootGet**](DefaultApi.md#readRootGet) | **GET** / | Read Root



## readRootGet

> readRootGet()

Read Root

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.DefaultApi();
apiInstance.readRootGet((error, data, response) => {
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

