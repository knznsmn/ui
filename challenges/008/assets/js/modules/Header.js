export function Header() {
	const header = document.getElementsByTagName("header")[0];
	const h1	 = document.createElement("h1");
	h1.innerText = "404 Page Design";
	header.appendChild(h1);
}