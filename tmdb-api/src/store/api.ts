import { createAction } from "@reduxjs/toolkit";
import { IApiCallBeganPayload } from "./types/Api";

export const apiCallBegan = createAction<IApiCallBeganPayload>("api/callBegan");
export const apiCallSucceeded = createAction("api/callSucceeded");
export const apiCallFailed = createAction<unknown>("api/callFailed");
