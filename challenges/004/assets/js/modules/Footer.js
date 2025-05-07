export function Footer() {
  const footer = document.getElementsByTagName("footer")[0];
  const p = document.createElement("p");
  const span = document.createElement("span");
  const ans = new Date().getFullYear();
  span.innerHTML = "&copy;";
  p.innerHTML = `${ans} knznsmn. All rights reserved.`;
  p.insertAdjacentElement("afterbegin", span);
  
  footer.appendChild(p);
}