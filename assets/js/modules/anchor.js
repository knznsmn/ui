export function Body() {
	const body	 = document.getElementsByTagName('body')[0];
	const header = document.createElement('header');
	const footer = document.createElement('footer');
	const main	 = document.createElement('main');	

	body.appendChild(header);
	body.appendChild(main);
	body.appendChild(footer);
}