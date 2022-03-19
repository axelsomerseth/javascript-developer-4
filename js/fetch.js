const url1 = 'https://catfact.ninja/fact';
const url2 = 'https://api.coindesk.com/v1/bpi/currentprice.json';
const url3 = 'https://www.boredapi.com/api/activity';

function resolvePromises() {
	const response1 = fetch(url1);
	const response2 = fetch(url2);
	const response3 = fetch(url3);
	const combinedData = [];
	const combPromise = new Promise((resolve, reject) => {
		resolve(combinedData);
	});

	const promiseArray = [response1, response2, response3];
	Promise.all(promiseArray)
	.then(responses => {
		responses.forEach( r => {
			r.json()
			.then(data => combinedData.push(data))
			.catch(err => console.error(err));
		})
	})
	.catch(err => console.error(err));

	combPromise
	.then(data => console.log(data))
	.catch(err => console.error(err));
}

export { resolvePromises };