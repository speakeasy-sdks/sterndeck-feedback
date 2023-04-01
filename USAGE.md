<!-- Start SDK Example Usage -->
```typescript
import {
  FeedbackRequestBody,
  FeedbackResponse
} from "Feedback/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "Feedback";
const sdk = new SDK();

const req: FeedbackRequestBody = {
  completion: "corrupti",
  model: "provident",
  prompt: "distinctio",
};

sdk.feedback(req).then((res: FeedbackResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->