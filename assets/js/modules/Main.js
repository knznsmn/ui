import {challenges} from "./challenges.js";

function padding(index) {
	return index < 10 ? "00" : "0";
}

export function Main() {
	const main = document.getElementsByTagName("main")[0];
	const section = document.createElement("section");
		
	challenges.forEach((challenge, index) => {
		display_challenges(index);
	});
	
	
	function display_challenges(index) {
		const img = document.createElement("img");
		const h2  = document.createElement("h2");
		const  p  = document.createElement("p");
		const  a  = document.createElement("a");

		img.src = `/challenges/screenshots/${padding(index + 1)}${index + 1}.jpg`;
		img.alt = `${challenges[index].title}'s screenshot`;
		h2.innerText = challenges[index].title;
		a.href = `/challenges/${padding(index + 1)}${index + 1}`;
		p.innerText  = challenges[index].description;
		a.insertAdjacentElement("afterbegin", h2);
		section.appendChild(a);
		section.appendChild(img);
		section.appendChild(p);
	}
	main.appendChild(section);
	
}