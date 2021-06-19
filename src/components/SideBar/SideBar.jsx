import { Container } from "./styles";

const SideBar = ({ setProductsList, products }) => {
	const sizes = ["S", "M", "L", "XL"];
	const brands = ["brand x", "brand y", "brand z"];
	const idealFor = ["men", "women"];

	const filterList = (size, basis, e) => {
		e.preventDefault();
		const filteredProducts = products.filter(item => item[basis] === size);
		setProductsList(filteredProducts);
	};

	return (
		<Container>
			<h2>Filter:</h2>

			<form>
				<strong>Size</strong>
				<ul>
					{sizes.map(item => (
						<li key={item}>
							<button onClick={e => filterList(item, "size", e)}>{item}</button>
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
							<button onClick={e => filterList(item, "brand", e)}>{item}</button>
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
							<button onClick={e => filterList(item, "idealFor", e)}>{item}</button>
						</li>
					))}
				</ul>
			</form>
			<hr />
			<button onClick={() => setProductsList(products)}>remove all filters</button>
		</Container>
	);
};

export default SideBar;
