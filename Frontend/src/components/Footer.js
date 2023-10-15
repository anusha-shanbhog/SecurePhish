import React from "react";
import { Box } from "@mui/material";

export default function Footer() {
	return (
		<Box
			sx={{
				backgroundColor: "#4B9CC5",
				padding: "15px",
				width: "100%",
				position: "fixed",
				bottom: 0,
				left: 0,
				right: 0,
			}}
			component="footer"
		>
			<div style={{ maxWidth: "960px", margin: "0 auto" }}>
				{/* Content inside the footer */}
				<p style={{ color: "black", textAlign: "center", margin: 0, fontFamily: "cursive", fontStyle: "initial", fontWeight: "20px", paddingTop: "10px", height: "50px" }}>
					Made by Team Chakde India
				</p>
			</div>
		</Box>
	);
}