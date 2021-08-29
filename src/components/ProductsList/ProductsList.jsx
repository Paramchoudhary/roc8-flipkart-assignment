import { Card, CardsContainer, ImageContainer, ProductsListContainer } from "./styles";

const ProductsList = ({ productsList, sortPrice, resetOrder }) => {
	return (
		<ProductsListContainer>
			<div>
				Sort products by price: <button onClick={() => sortPrice("highToLow")}>high to low</button>{" "}
				<button onClick={() => sortPrice("lowToHigh")}>low to high</button> <button onClick={resetOrder}>reset</button>
			</div>
			<CardsContainer>
				{productsList.map(item => (
					<Card key={item.id}>
						<ImageContainer>
							<img src={item.image} alt="product" />
						</ImageContainer>
						<h3>{item.name}</h3>
						<div>price: {item.price}</div>
						<div>size: {item.size}</div>
						<div>brand: {item.brand}</div>
						<div>ideal for: {item.idealFor}</div>
					</Card>
				))}
			</CardsContainer>
		</ProductsListContainer>
  <p className = made>Made by chetanchandel31</p>
	);
};

export default ProductsList;
