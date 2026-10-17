import {
  CREATE_HELPER,
  RETRIEVE_HELPER,
  UPDATE_HELPER,
  DELETE_HELPER,
  DELETE_ALL_HELPER,
} from "./types";

import HelperDataService from "../../services/helper.service";

export const createHelper = (data) => async (dispatch) => {
  try {
    const res = await HelperDataService.create(data);
    dispatch({
      type: CREATE_HELPER,
      payload: res.data.data,
    });
    return Promise.resolve(res.data.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveHelpers = () => async (dispatch) => {
  try {
    const res = await HelperDataService.getAll();
    dispatch({
      type: RETRIEVE_HELPER,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const editHelper = (id) => async (dispatch) => {
  try {
    const res = await HelperDataService.get(id);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateHelper = (id, data) => async (dispatch) => {
  try {
    const res = await HelperDataService.update(id, data);
    dispatch({
      type: UPDATE_HELPER,
      payload: { id, ...data },
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteHelper = (id) => async (dispatch) => {
  try {
    await HelperDataService.delete(id);
    dispatch({
      type: DELETE_HELPER,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllHelpers = () => async (dispatch) => {
  try {
    const res = await HelperDataService.deleteAll();
    dispatch({
      type: DELETE_ALL_HELPER,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
