function createElement(data) {
	let body = document.body;
	const p = document.createElement("p");
	data = document.createTextNode(data);
	p.appendChild(data);
	body.appendChild(p);
  }
  
  function queryWikipedia(callback) {
	const url =
	  "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
	let xhr = new XMLHttpRequest();
  
		xhr.onreadystatechange = function (){
		if (this.readyState == 4 && this.status == 200) {
		   createElement(xhr.responseText)
		} else {
			console.log('Error', xhr.statusText);
		}
	}
  
	xhr.open("GET", url, true);
	xhr.send(); 
  }
  
  queryWikipedia(createElement);