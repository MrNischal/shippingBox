import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
	updateFormData,
	addItem,
	resetFormData,
} from "../store/shippingBoxSlice";
import { validationSchema } from "../util/validations/ValidationSchema";

export default function useShippingForm() {
	const [error, setError] = useState(null);
	const dispatch = useDispatch();
	const formData = useSelector((state) => state.shippingBoxSlice.formData);

	function handleChange(e) {
		const { name, value } = e.target;
		const newObj = {
			name,
			value,
		};
		dispatch(updateFormData(newObj));
	}

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			await validationSchema.validate(formData, {
				abortEarly: false,
			});
			setError(null);
			const newObj = {
				receiverName: formData["receiverName"],
				weight: formData["weight"],
				boxColor: formData["boxColor"],
				destCountry: formData["destCountry"],
				ShippingCost: formData["weight"] * 2000,
			};
			dispatch(addItem(newObj));
			dispatch(resetFormData());
			alert("The form has been submitted");
		} catch (err) {
			const validationError = err.inner;
			const newErrObj = {};
			validationError.forEach((element) => {
				newErrObj[element.path] = element.message;
			});
			setError(newErrObj);
		}
	}
	return { formData, handleChange, handleSubmit, error };
}
