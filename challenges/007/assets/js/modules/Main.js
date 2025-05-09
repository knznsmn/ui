export function Main() {
	const main = document.getElementsByTagName("main")[0];

	const section = document.createElement("section");
	const article = document.createElement("article");
	article.appendChild(section);
	main.appendChild(article);
}