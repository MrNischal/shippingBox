import { useSelector } from "react-redux";
export default function useShippingList() {
	const shippingList = useSelector(
		(state) => state.shippingBoxSlice.shippingList
	);
	return { shippingList };
}
