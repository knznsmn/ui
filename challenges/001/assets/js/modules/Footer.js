export function Footer() {
	const footer = document.getElementsByTagName("footer")[0];
	const p = document.createElement("p");
	p.innerText = `knznsmn. All rights reversed.`;
	footer.appendChild(p);
}