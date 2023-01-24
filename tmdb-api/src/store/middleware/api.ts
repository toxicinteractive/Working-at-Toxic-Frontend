import axios from "axios";
import { apiCallFailed, apiCallSucceeded } from "../api";
import { Store, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { IApiCallBeganPayload } from "../types/Api";

export const api =
  (store: Store) =>
  (next: Dispatch) =>
  async (action: PayloadAction<IApiCallBeganPayload>) => {
    if (action.type !== "api/callBegan") return next(action);

    const { dispatch } = store;
    const { url, method, data, onStart, onSuccess, onFailed }: any =
      action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
      const response = await axios.request({
        baseURL: "https://api.themoviedb.org/3/discover",
        url,
        method,
        data,
      });

      dispatch(apiCallSucceeded(response.data));

      if (onSuccess) {
        dispatch({ type: onSuccess, payload: response.data });
      }
    } catch (error) {
      dispatch(apiCallFailed(error));

      if (onFailed) {
        dispatch({ type: onFailed, payload: error });
      }
    }
  };
