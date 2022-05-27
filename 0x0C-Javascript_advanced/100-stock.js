const stock = {
	macbook: 2,
	iphone: 4,
  };
  
  function processPayment(itemName) {
	let item = itemName.toLowerCase();
	stock[item] -= 1;
	console.log(`Payment is being processed for item ${itemName}`);
  }
  
  function processError(itemName) {
	let item = itemName.toLowerCase();
  
	console.log(`No more ${item} in stock`);
	console.log(`Payment is not being processed`);
  }
  
  function processOrder(itemName, callbackPayment, callbackError) {
	console.log(`Verifying the stock of ${itemName}`);
	let item = itemName.toLowerCase();
	
	if (stock[item] > 0) {
	  callbackPayment(itemName);
	} else {
	  callbackError(itemName);
	}
  }
  
  let order = prompt(
	`Please enter the item you would like to purchase (Macbook, iPhone)`
  );
  processOrder(order, processPayment, processError);