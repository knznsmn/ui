export function Main() {
	const main = document.getElementsByTagName("main")[0];
	const article = document.createElement("article");
	const section = document.createElement("section");

	article.appendChild(section);
	main.appendChild(article);
}