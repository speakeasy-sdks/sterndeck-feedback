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
  speakeasyApiKey: "",
}).then((res: FeedbackResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->