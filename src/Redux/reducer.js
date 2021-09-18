import {
  CAR_DETAILS_REQUEST,
  CAR_DETAILS_SUCCESS,
  CAR_DETAILS_FAILURE,
  SINGLE_CAR_DETAILS_REQUEST,
  SINGLE_CAR_DETAILS_SUCCESS,
  SINGLE_CAR_DETAILS_FAILURE,
} from "./actionTypes";
const init = {
  isLoading: false,
  isError: false,
  data: [],
};

export const cardetailsReducer = (state = init, { type, payload }) => {
  switch (type) {
    case CAR_DETAILS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CAR_DETAILS_SUCCESS:
    //   console.log(payload);
      return {
        ...state,
        data: payload,
        isLoading: false,
      };

    case CAR_DETAILS_FAILURE:
      return {
        ...state,

        payload,
        isError: true,
        isLoading: false,
      };

    default:
      return state;
  }
};
