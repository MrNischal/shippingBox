import React from "react";
import "./ShippingForm.css";

import { DEST_COUNTRY_LIST } from "../../util/constant";
import useShippingForm from "../../hooks/useShippingForm";

const ShippingForm = () => {
	const { formData, handleChange, handleSubmit, error } = useShippingForm();

	return (
		<div className='page-wrapper'>
			<div className='shipping-form-container'>
				<form onSubmit={handleSubmit}>
					<div className='formField receiverName'>
						<label htmlFor='receiverName'>Receivers Name</label>
						<input
							id='receiverName'
							name='receiverName'
							type='text'
							value={formData.receiverName}
							onChange={handleChange}
						/>
						{error?.receiverName && (
							<div className='error-message'>
								<p>{error?.receiverName}</p>
							</div>
						)}
					</div>
					<div className='formField weight'>
						<label htmlFor='weight'>Weight</label>
						<input
							id='weight'
							name='weight'
							type='number'
							value={formData.weight}
							onChange={handleChange}
						/>
						{error?.weight && (
							<div className='error-message'>
								<p>{error?.weight}</p>
							</div>
						)}
					</div>
					<div className='formField boxColor'>
						<label htmlFor='boxColor'>Box Color</label>
						<div className='color-input-wrapper'>
							<input
								id='boxColor'
								name='boxColor'
								type='color'
								value={formData.boxColor}
								onChange={handleChange}
							/>
							<span className='color-display'>{formData.boxColor}</span>
						</div>
						{error?.boxColor && (
							<div className='error-message'>
								<p>{error?.boxColor}</p>
							</div>
						)}
					</div>
					<div className='formField destinationCountry'>
						<label htmlFor='destCountry'>Destination Country</label>
						<select
							id='destCountry'
							name='destCountry'
							value={formData.destCountry}
							onChange={handleChange}
						>
							<option value='' disabled>
								Select Destination Country
							</option>
							{DEST_COUNTRY_LIST.map((item, index) => (
								<option
									key={index}
									value={item.name}
									data-shippingrate={item.cost}
								>
									{item.name}
								</option>
							))}
						</select>
						{error?.destCountry && (
							<div className='error-message'>
								<p>{error?.destCountry}</p>
							</div>
						)}
					</div>
					<div className='submitButton'>
						<input id='submitButton' type='submit' value='Submit' />
					</div>
				</form>
			</div>
		</div>
	);
};

export default ShippingForm;
