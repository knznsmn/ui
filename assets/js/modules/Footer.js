export function Footer() {
	const p 	 = document.createElement('p');
	const ans 	 = new Date().getFullYear();
	const footer = document.getElementsByTagName('footer')[0];

	const span = "<span>&copy;</span>";
	p.innerHTML = `${span} ${ans} knznsmn. All rights reversed.`;
	footer.appendChild(p);
}