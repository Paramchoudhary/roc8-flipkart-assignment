import styled from "styled-components/macro";

export const Container = styled.div`
	min-width: 20%;
	box-sizing: border-box;
	border: solid 8px white;
	border-top: none;
	border-bottom: none;
	min-height: calc(100vh - 37px);
	text-align: left;
	padding: 10px 0 0 10px;

	ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}
`;
