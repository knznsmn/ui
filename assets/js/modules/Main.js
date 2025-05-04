import {challenges} from "./challenges.js";

export function Main() {
	const main = document.getElementsByTagName("main")[0];
	const section = document.createElement("section");
		
	challenges.forEach((challenge, index) => {
		display_challenges(index);
	});
	
	
	function display_challenges(index) {
		const h2 = document.createElement("h2");
		const  p = document.createElement("p");
		const  a = document.createElement("a");

		h2.innerText = challenges[index].title;
		a.href = `/challenges/${index + 1}`;
		p.innerText  = challenges[index].description;
		a.insertAdjacentElement("afterbegin", h2);
		section.appendChild(a);
		section.appendChild(p);
	}
	main.appendChild(section);
	
}