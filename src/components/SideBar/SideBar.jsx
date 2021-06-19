import { useEffect, useState } from "react";
import { Container } from "./styles";

const SideBar = ({ setProductsList, products }) => {
	const sizes = ["S", "M", "L", "XL"];
	const brands = ["brand x", "brand y", "brand z"];
	const idealFor = ["men", "women"];

	const initialFilterOptions = [
		{ type: "size", value: null },
		{ type: "brand", value: null },
		{ type: "idealFor", value: null },
	];

	const [filterOptions, setFilterOptions] = useState(initialFilterOptions);

	const changeFilters = (e, item, index) => {
		e.preventDefault();
		setFilterOptions(prevState => {
			const prevOptions = [...prevState];
			prevOptions[index].value = item;
			return prevOptions;
		});
	};

	useEffect(() => {
		let productsArr = [...products];

		filterOptions.forEach(option => {
			if (option.value) productsArr = productsArr.filter(item => item[option.type] === option.value);
		});
		setProductsList(productsArr);
	}, [filterOptions, products, setProductsList]);

	return (
		<Container>
			<h2>Filter:</h2>

			<form>
				<strong>Size</strong>
				<ul>
					{sizes.map(item => (
						<li key={item}>
							<button onClick={e => changeFilters(e, item, 0)}>{item}</button>
						</li>
					))}
				</ul>
			</form>
			<hr />
			<form>
				<strong>Brands</strong>
				<ul>
					{brands.map(item => (
						<li key={item}>
							<button onClick={e => changeFilters(e, item, 1)}>{item}</button>
						</li>
					))}
				</ul>
			</form>
			<hr />
			<form>
				<strong>Ideal for</strong>
				<ul>
					{idealFor.map(item => (
						<li key={item}>
							<button onClick={e => changeFilters(e, item, 2)}>{item}</button>
						</li>
					))}
				</ul>
			</form>
			<hr />
			<button onClick={() => setFilterOptions(initialFilterOptions)}>remove all filters</button>
		</Container>
	);
};

export default SideBar;
