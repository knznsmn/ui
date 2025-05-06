export function Main() {
  const main = document.getElementsByTagName("main")[0];
  
  const section = document.createElement("section");
  section.innerText = "Hello World!";
  main.appendChild(section);
}