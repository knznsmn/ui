export function Footer() {
  const footer = document.getElementsByTagName("footer")[0];
  const ans = new Date().getFullYear();
  const p = document.createElement("p");
  p.innerText = `${ans} knznsmn. All rights reserved.`;
  footer.appendChild(p);
}