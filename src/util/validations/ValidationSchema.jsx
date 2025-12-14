import * as Yup from "yup";
export const validationSchema = Yup.object({
	receiverName: Yup.string("Please enter a valid userName.")
		.required("This field is required.")
		.min(3, "Receiver's Name must be at least 3 characters")
		.max(50, "Receiver's Name should not be more than 3 characters"),

	weight: Yup.number()
		.typeError("Please enter valid input. i.e number")
		.required("This field is reqired.")
		.positive("Please enter a valid weight.")
		.max(50)
		.min(1),

	boxColor: Yup.string().required("This field is required."),

	destCountry: Yup.string().required("This field is requried."),
});
