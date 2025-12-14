import { DEST_COUNTRY_LIST } from "./constant";
export function shippingCost(shipWeight, shipDest) {
	const shippingRate = DEST_COUNTRY_LIST.find(
		(item) => item.name.toLowerCase() === shipDest.toLowerCase()
	).rate;
	return shipWeight * shippingRate;
}
