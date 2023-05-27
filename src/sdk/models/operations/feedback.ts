/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class FeedbackSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2;name=Authorization" })
    speakeasyApiKey: string;
}

export class FeedbackRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "completion" })
    completion?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "model" })
    model?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "prompt" })
    prompt?: string;
}

export class FeedbackResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
