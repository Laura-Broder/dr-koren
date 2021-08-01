import React from "react";
import styled from "styled-components/macro";
import Logo from "./utils/Logo";
import { ReactComponent as SearchIcon } from "./assets/search_black_24dp.svg";

const StyledNavbarWrapper = styled.nav`
	display: flex;
	justify-content: space-between;
    position: fixed;
    width: 100%;
    height: 60px;
`;
const StyledNavbarList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-width: 40vw;

	li {
		font-size: 12px;
		font-weight: 400;
		line-height: 23px;
		letter-spacing: 1.5px;
	}
`;
const StyledSearchIconWrapper = styled.li`
	min-width: 3vw;
`;
const Navbar = () => {
	return (
		<StyledNavbarWrapper>
			<Logo theme="dark" />
			<StyledNavbarList>
				<li>CONTACT</li>
				<li>TESTIMONIALS</li>
				<li>ABOUT</li>
				<StyledSearchIconWrapper>
					<SearchIcon />
				</StyledSearchIconWrapper>
			</StyledNavbarList>
		</StyledNavbarWrapper>
	);
};
export default Navbar;
