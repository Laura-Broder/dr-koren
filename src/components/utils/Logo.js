import React from "react";
import styled, { css } from "styled-components/macro";

const StyledLogoWrapper = styled.div`
	display: flex;
	gap: 0.5rem;
`;
const StyledLogo = styled.h2`
	padding: 1rem;
	border-radius: 50%;
	background-color: ${({ theme }) => (theme = "dark" ? "#094b72" : "#ffffff")};
	color: ${({ theme }) => (theme = "dark" ? "#ffffff" : "#094b72")};
	color: #ffffff;
	font-size: 1.5rem;
	font-weight: 700;
`;
const StyledTitle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	h3 {
		font-size: 20px;
		font-weight: 700;
		line-height: 23px;
		letter-spacing: 1.5px;
	}
	h4 {
		font-family: Poppins;
		font-size: 10px;
		font-style: normal;
		font-weight: 400;
		line-height: 12px;
		letter-spacing: 1.5px;
		text-align: left;
	}
`;

const Logo = ({ theme }) => {
	return (
		<StyledLogoWrapper>
			<StyledLogo theme={theme}>CK</StyledLogo>
			<StyledTitle theme={theme}>
				<h3>Dr. Claude Koren</h3>
				<h4>Gynecologic Oncology</h4>
			</StyledTitle>
		</StyledLogoWrapper>
	);
};
export default Logo;
