import React, { Fragment } from "react";

//create your first component
const Home = () => {
	return (
		<Fragment>
			<header className="text-center mt-5">
				<div>
					<h2>Hello</h2>
				</div>
				<div>
					<h2>Hello</h2>
				</div>
			</header>
			<footer>
				<button className="button" type="button">
					Click me!
				</button>
			</footer>
		</Fragment>
	);
};

export default Home;
