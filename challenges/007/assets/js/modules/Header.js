export function Header() {
	const header = document.getElementsByTagName("header")[0];
	const h1	 = document.createElement("h1");
	h1.innerText = "Settings";
	header.appendChild(h1);
}