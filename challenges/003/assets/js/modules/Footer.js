export function Footer() {
  const footer   = document.getElementsByTagName("footer")[0];
  const span     = document.createElement("span");
  const ans      = new Date().getFullYear();
  const p        = document.createElement("p");
  span.innerHTML = "&copy;";
  p.innerText    = `${ans} knznsmn. All rights reserved.`;
  p.insertAdjacentElement("afterbegin", span)
  footer.appendChild(p);
}