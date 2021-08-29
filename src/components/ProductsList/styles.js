import styled from "styled-components/macro";

export const CardsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 5%;

	img {
		width: 100%;
	}
`;

export const Card = styled.div`
	border: solid 4px #f1f3f6;
	width: 30%;
	flex-grow: 1;
	background-color: white;
	max-width: 400px;
`;

export const ImageContainer = styled.div`
	max-height: 300px;
	overflow: hidden;
`;

export const ProductsListContainer = styled.div`
	padding-top: 10px;
	flex-grow: 1;
`;
export const made = styled.div`
text-align : center;
`;
