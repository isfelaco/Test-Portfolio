import React from "react";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div``;

const Layout = () => {
	return (
		<Container>
			<Outlet />
		</Container>
	);
};

export default Layout;
