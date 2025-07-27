import React, { useState } from "react";
import "./App.css";
import lemonLogoNav from "./assets/1.png";
import bgImage from "./assets/image.png";

function App() {
	const [page, setPage] = useState("home");

	const renderPage = () => {
		switch (page) {
			case "home":
				return (
					<>
						<section className="bio">
							<h2>About Us</h2>
							<p>
								Based in Chicago, Illinois, Little Lemon is a family-owned
								Mediterranean restaurant, focused on traditional recipes served
								with a modern twist. Owned by brothers Mario and Adrian, the
								restaurant blends Italian, Greek, and Turkish flavors into a
								rotating seasonal menu. With a rustic yet modern atmosphere,
								Little Lemon is a favorite for locals at any time of the day.
							</p>
						</section>
					</>
				);
			case "reservation":
				return (
					<section className="card">
						<h2>Reserve a Table</h2>
						<ReservationForm />
					</section>
				);
			case "order":
				return (
					<section className="card">
						<h2>Place an Order</h2>
						<OrderForm />
					</section>
				);
			default:
				return null;
		}
	};

	return (
		<div
			className="app"
			style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
		>
			<nav
				className="navbar"
				style={{
					display: "flex",
					justifyContent: "space-between",
					padding: "1rem",
				}}
			>
				<img
					className="logo"
					src={lemonLogoNav}
					style={{ height: "50px" }}
				/>
				<div
					className="nav-links"
					style={{ display: "flex", gap: "1rem" }}
				>
					<button onClick={() => setPage("home")}>About</button>
					<button onClick={() => setPage("reservation")}>Reservation</button>
					<button onClick={() => setPage("order")}>Order</button>
				</div>
			</nav>

			<main>{renderPage()}</main>
		</div>
	);
}

function ReservationForm() {
	const [form, setForm] = useState({
		name: "",
		date: "",
		time: "",
		guests: 1,
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Reservation submitted:\n" + JSON.stringify(form, null, 2));
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				name="name"
				placeholder="Name"
				value={form.name}
				onChange={handleChange}
				required
			/>
			<input
				type="date"
				name="date"
				value={form.date}
				onChange={handleChange}
				required
			/>
			<input
				type="time"
				name="time"
				value={form.time}
				onChange={handleChange}
				required
			/>
			<input
				type="number"
				name="guests"
				min="1"
				max="10"
				value={form.guests}
				onChange={handleChange}
				required
			/>
			<button type="submit">Reserve</button>
		</form>
	);
}

function OrderForm() {
	const [order, setOrder] = useState({ item: "", quantity: 1 });
	const menu = [
		"Falafel Wrap",
		"Lemon Chicken",
		"Greek Salad",
		"Lamb Kebab",
		"Stuffed Grape Leaves",
	];

	const handleChange = (e) => {
		const { name, value } = e.target;
		setOrder((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Order placed:\n" + JSON.stringify(order, null, 2));
	};

	return (
		<form onSubmit={handleSubmit}>
			<select
				name="item"
				value={order.item}
				onChange={handleChange}
				required
			>
				<option value="">Select an item</option>
				{menu.map((item) => (
					<option
						key={item}
						value={item}
					>
						{item}
					</option>
				))}
			</select>
			<input
				type="number"
				name="quantity"
				min="1"
				max="10"
				value={order.quantity}
				onChange={handleChange}
				required
			/>
			<button type="submit">Order</button>
		</form>
	);
}

export default App;
