import { createSlice } from "@reduxjs/toolkit";
import shippingLIst from "../util/shippingList.json";

const shippingBoxSlice = createSlice({
	name: "ShippingBox",
	initialState: {
		shippingList: shippingLIst,
		formData: {
			receiverName: "",
			weight: "",
			boxColor: "#000000",
			destCountry: "",
		},
	},
	reducers: {
		addItem: (state, action) => {
			state.shippingList.push(action.payload);
		},
		deleteItem: (state, action) => {
			const newState = state.shippingList.filter(
				(item) => item.id !== action.payload
			);
			return { ...state, shippingList: newState };
		},
		updateFormData: (state, action) => {
			state.formData = {
				...state.formData,
				[action.payload.name]: action.payload.value,
			};
		},
		resetFormData: (state, action) => {
			state.formData = {
				receiverName: "",
				weight: "",
				boxColor: "#000000",
				destCountry: "",
			};
		},
	},
});

export const { addItem, deleteItem, updateFormData, resetFormData } =
	shippingBoxSlice.actions;
export default shippingBoxSlice.reducer;
