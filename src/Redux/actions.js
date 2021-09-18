import axios from "axios";
import {
  CAR_DETAILS_REQUEST,
  CAR_DETAILS_SUCCESS,
  CAR_DETAILS_FAILURE,
  SINGLE_CAR_DETAILS_REQUEST,
  SINGLE_CAR_DETAILS_SUCCESS,
  SINGLE_CAR_DETAILS_FAILURE,
} from "./actionTypes";

const carRequest = () => {
  return {
    type: CAR_DETAILS_REQUEST,
  };
};

const carSuccess = (payload) => {
  return {
    type: CAR_DETAILS_SUCCESS,
    payload: payload,
  };
};
const carFailure = () => {
  return {
    type: CAR_DETAILS_FAILURE,
  };
};

const singleCarRequest = () => {
  return {
    type: SINGLE_CAR_DETAILS_REQUEST,
  };
};

const singleCarSuccess = (payload) => {
  return {
    type: SINGLE_CAR_DETAILS_SUCCESS,
    payload: payload,
  };
};

const singleCarFailure = () => {
  return {
    type: SINGLE_CAR_DETAILS_FAILURE,
  };
};

const fetchData = () => async (dispatch) => {
  dispatch(carRequest());
  try {
    let res = await axios.get(
      "https://data.cityofnewyork.us/resource/h9gi-nx95.json"
    );
    // console.log(res);
    dispatch(carSuccess(res.data));
  } catch (error) {
    dispatch(carFailure(error));
  }
};

export { carRequest, carSuccess, carFailure, fetchData };
