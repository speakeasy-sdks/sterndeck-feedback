<!-- Start SDK Example Usage -->
```typescript
import { SDK } from "Feedback";
import { FeedbackResponse } from "Feedback/dist/sdk/models/operations";

const sdk = new SDK();

sdk.feedback({
  completion: "corrupti",
  model: "provident",
  prompt: "distinctio",
}, {
  speakeasyApiKey: "Bearer YOUR_ACCESS_TOKEN_HERE",
}).then((res: FeedbackResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->