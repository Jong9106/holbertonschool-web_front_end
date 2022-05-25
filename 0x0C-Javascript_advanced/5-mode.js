function changeMode(size, weight, transform, background, color) {
	document.documentElement.style["fonts-size"] = size;
	document.documentElement.style["font-weight"] = weight;
	document.documentElement.style["text-transform"] = transform;
	document.documentElement.style["background-color"] = background;
	document.documentElement.style["color"] = color;
  }
  
  const spooky = function () {
	changeMode(9, "bold", "uppercase", "pink", "green");
  };
  
  const darkMode = function () {
	changeMode(12, "bold", "capitalize", "black", "white");
  };
  
  const screamMode = function () {
	changeMode(12, "normal", "lowercase", "white", "black");
  };
  
  function main() {

	const body = document.body;
  
	const text = document.createTextNode("Welcome Holberton!");
  
	const p = document.createElement("p");
  
	p.appendChild(text);
  

	body.appendChild(p);

	const spookyButton = document.createElement("button");
	const spookyText = document.createTextNode("Spooky");
	spookyButton.setAttribute("onClick", "spooky()");
	spookyButton.appendChild(spookyText);
	body.appendChild(spookyButton);
  
	const darkButton = document.createElement("button");
	const darkText = document.createTextNode("Dark mode");
	darkButton.setAttribute("onClick", "darkMode()");
	darkButton.appendChild(darkText);
	body.appendChild(darkButton);
  
	const screamButton = document.createElement("button");
	const screamText = document.createTextNode("Scream mode");
	screamButton.setAttribute("onClick", "screamMode()");
	screamButton.appendChild(screamText);
	body.appendChild(screamButton);
  }
  
  main();