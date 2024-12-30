import { useState } from "react";

export default function App() {
	const [inputText, setInputText] = useState("");
	const [items, setItems] = useState([]);

	function handleChange(event) {
		const newValue = event.target.value;
		setInputText(newValue);
	}

	function addItem() {
		if (inputText.trim() !== "") {
			// Prevent adding empty items
			setItems((prevItems) => [...prevItems, inputText.trim()]);
			setInputText("");
		}
	}

	// function addItem() {
	// 	setItems((prevItems) => {
	// 		return [...prevItems, inputText];
	// 	});
	// 	setInputText("");
	// }

	return (
		<div className="container">
			<div className="heading">
				<h1>To-Do List</h1>
			</div>
			<div className="form">
				<input
					onChange={handleChange}
					type="text"
					value={inputText}
					placeholder="Add Item"
				/>
				<button onClick={addItem}>
					<span>Add</span>
				</button>
			</div>
			<div>
				<ul>
					{items.map((todoItem, index) => (
						<li key={index}>{todoItem}</li>
					))}
				</ul>
			</div>
		</div>
	);
}
