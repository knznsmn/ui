export function Calculatrice() {
  const article = document.getElementsByTagName("article")[0];
  
  // Display
  const oled = document.createElement("section");
  const leds = document.createElement("section");
  const keys = document.createElement("section");
  const no_of_keys = 12;
  for (let i = 0; i < no_of_keys; i++) {
    keys.appendChild(document.createElement("button"));
    console.log(i);
  }
  
  article.appendChild(oled);
  article.appendChild(leds);
  article.appendChild(keys);
}