export function Calculatrice() {
  const article = document.getElementsByTagName("article")[0];
  
  // Display
  const oled = document.createElement("section");
  const leds = document.createElement("section");
  const keys = document.createElement("section");
  const no_of_keys = 12;
  const key  = {
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "%",
    "="
    };
  
  article.appendChild(oled);
  article.appendChild(leds);
  article.appendChild(keys);
}