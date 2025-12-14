import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ShippingForm from "./components/shippingForm/ShippingForm";
import ShippingList from "./components/shippingList/ShippingList";

function App() {
	return (
		<div className='app'>
			<Navbar />
			<Routes>
				<Route path='/' element={<ShippingForm />} />
				<Route path='/list' element={<ShippingList />} />
			</Routes>
		</div>
	);
}

export default App;
