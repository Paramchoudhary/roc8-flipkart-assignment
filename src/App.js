import { useState } from "react";
import "./App.css";
import products from "./fixtures/products.json";
import { Header, Main } from "./styles";
import ProductsList from "./components/ProductsList/ProductsList";
import SideBar from "./components/SideBar/SideBar";

function App() {
	const [productsList, setProductsList] = useState(products);

	const sortPrice = order => {
		setProductsList(prevState => {
			const prevProducts = [...prevState];
			let sortedProducts;
			if (order === "highToLow") sortedProducts = prevProducts.sort((a, b) => b.price - a.price);
			else if (order === "lowToHigh") sortedProducts = prevProducts.sort((a, b) => a.price - b.price);
			return sortedProducts;
		});
	};

	const resetOrder = () => setProductsList(products);

	return (
		<div className="App">
			<Header>
				<h1>Flipkart</h1>
			</Header>

			<Main>
				<SideBar products={products} setProductsList={setProductsList} />

				<ProductsList productsList={productsList} products={products} sortPrice={sortPrice} resetOrder={resetOrder} />
			</Main>
		</div>
	);
}

export default App;
