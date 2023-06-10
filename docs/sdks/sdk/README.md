# SDK

## Overview

sterndeck-4: A simple API to manage a list of tasks

### Available Operations

* [feedback](#feedback) - feedback

## feedback

feedback

### Example Usage

```typescript
import { SDK } from "Feedback";
import { FeedbackResponse } from "Feedback/dist/sdk/models/operations";

const sdk = new SDK();

sdk.sdk.feedback({
  completion: "quibusdam",
  model: "unde",
  prompt: "nulla",
}, {
  speakeasyApiKey: "",
}).then((res: FeedbackResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.FeedbackRequestBody](../../models/operations/feedbackrequestbody.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.FeedbackSecurity](../../models/operations/feedbacksecurity.md)       | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.FeedbackResponse](../../models/operations/feedbackresponse.md)>**

