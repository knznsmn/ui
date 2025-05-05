export function Body() {
	const body 	 = document.getElementsByTagName("body")[0];

	const header = document.createElement("header");
	const main	 = document.createElement("main");
	const footer = document.createElement("footer");

	body.appendChild(header);
	body.appendChild(main);
	body.appendChild(footer);
}