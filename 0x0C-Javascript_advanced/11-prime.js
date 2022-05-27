function countPrimeNumbers() {
	let numberOfPrimes = 0;
	let isPrime = true;
  
	for (let index = 2; index <= 100; index++) {
	  isPrime = true;
	  let limit = Math.round(Math.sqrt(index));
  
	  for (let mod = 2; mod <= limit; mod++) {
		if (index % mod == 0) {
		  isPrime = false;
		  break;
		}
	  }
	  if (isPrime) {
		numberOfPrimes++;
	  }
	}
	return numberOfPrimes;
  }
  
  const time0 = performance.now();
  
  for (let index = 0; index < 100; index++) {
	setTimeout(countPrimeNumbers, 0);
  }
  
  const time1 = performance.now();
  
  const time = time1 - time0;
  
  setTimeout(function () {
	console.log(
	  `Execution time of calculating prime numbers 100 times was ${time} millisecons`
	);
  }, 0);
  