function divideBy(firstNumber) {
	return function(secondNumber){
		return secondNumber / firstNumber;
	}
}
function addBy(firstNumber) {
	return function(secondNumber){
		return firstNumber + secondNumber;
	}
}

addBy100 =  addBy(100);
addBy1000 = addBy(1000);
divideBy10 = divideBy(10);
divideBy100 = divideBy(100);

console.log(addBy100(20));
console.log(divideBy10(20));
console.log(divideBy100(200));
console.log(addBy1000(20));
