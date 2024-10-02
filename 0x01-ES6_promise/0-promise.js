function getResponseFromAPI(){
	const promise = Promise.resolve(20);
	return promise;
}

const response = getResponseFromAPI();
console.log(response instanceof Promise);
