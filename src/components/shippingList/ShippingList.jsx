import React from "react";
import { shippingCost } from "../../util/calculations";
import useShippingList from "../../hooks/useShippingList";
import "./ShippingList.css";

const ShippingList = () => {
	const { shippingList } = useShippingList();
	return (
		<div className='shipping-list-page'>
			<div className='shippingListheader'>Shipping List</div>
			{shippingList.length === 0 ? (
				<div className='no-data-message'>
					<p>No shipping records found. Add some items from the form!</p>
				</div>
			) : (
				<div className='ShippinglistItems'>
					<table>
						<thead>
							<tr>
								<th>Receiver's Name</th>
								<th>Weight(kg)</th>
								<th>Box Color</th>
								<th>Destination Country</th>
								<th>Total Shipping Cost(INR)</th>
							</tr>
						</thead>
						<tbody>
							{shippingList.map((item, index) => {
								return (
									<tr key={index}>
										<td>{item.receiverName}</td>
										<td>{item.weight}</td>
										<td>
											<div className='color-box-container'>
												<div
													className='color-box'
													style={{
														backgroundColor: item.boxColor.toLowerCase(),
													}}
												></div>
												<div>{item.boxColor}</div>
											</div>
										</td>
										<td>{item.destCountry}</td>
										<td>₹{shippingCost(item.weight, item.destCountry)}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default ShippingList;
