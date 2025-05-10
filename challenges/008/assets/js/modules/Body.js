export function Body() {
	const body 	 = document.body;
	const main 	 = document.createElement("main");
	const header = document.createElement("header");
	const footer = document.createElement("footer");

	body.appendChild(header);
	body.appendChild(main);
	body.appendChild(footer);
}