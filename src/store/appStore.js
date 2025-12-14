import { configureStore } from "@reduxjs/toolkit";
import shippingBoxSlice from "./shippingBoxSlice";

const appStore = configureStore({
	reducer: {
		shippingBoxSlice: shippingBoxSlice,
	},
});
export default appStore;
