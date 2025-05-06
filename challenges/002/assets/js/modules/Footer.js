export function Footer() {
  const footer = document.getElementsByTagName("footer")[0];
  const ans = new Date().getFullYear();
  const span = document.createElement("span");
  const p = document.createElement("p");
  span.innerHTML = "&copy;";
  p.insertAdjacentElement("afterbegin", span);
  p.innerHTML = `${ans} knznsmn. All rights reserved.`;
  footer.appendChild(p)
}