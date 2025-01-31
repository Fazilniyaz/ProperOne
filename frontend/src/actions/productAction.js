import axios from "axios";

import {
  productFail,
  productSuccess,
  productRequest,
} from "../slices/productSlice";

export const getProduct = (id) => async (dispatch) => {
  try {
    dispatch(productRequest());
    // if (process.env.NODE_ENV.trim() == "production") {
    const { data } = await axios.get(
      `http://13.60.193.109/:8000/api/v1/product/${id}`
    ); // The URL is correct
    dispatch(productSuccess(data));
    // } else {
    //   const { data } = await axios.get(`/api/v1/product/${id}`); // The URL is correct
    //   dispatch(productSuccess(data));
    // }
    console.log(data);
    dispatch(productSuccess(data));
    console.log("called");
  } catch (error) {
    console.log("hii");
    dispatch(productFail(error.response.data.message));
  }
};
