# SDK

## Overview

A simple API to manage a list of tasks

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
}).then((res: FeedbackResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
