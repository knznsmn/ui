export function Footer() {
	const footer 	= document.getElementsByTagName("footer")[0];
	const ans	 	= new Date().getFullYear();
	const span	 	= document.createElement("span");
	const p 	 	= document.createElement("p");
	span.innerHTML  = "&copy; ";
	p.innerHTML		= `${ans} knznsmn. All rights reserved.`;
	p.insertAdjacentElement("afterbegin", span);
	footer.appendChild(p);
}