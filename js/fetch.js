const url1 = 'https://catfact.ninja/fact';
const url2 = 'https://api.coindesk.com/v1/bpi/currentprice.json';
const url3 = 'https://www.boredapi.com/api/activity';

function resolvePromises() {
	const response1 = fetch(url1);
	const response2 = fetch(url2);
	const response3 = fetch(url3);
	const promiseArray = [response1, response2, response3];

	const combinedData = [];
	const combinedResponses = new Promise((resolve, reject) => {
		try {
			resolve(combinedData);
		} catch (err) {
			reject(err);
		}
	});

	Promise.all(promiseArray)
	.then(responses => {
		responses.forEach( r => {
			r.json()
			.then(data => combinedData.push(data))
			.catch(err => console.err(err));
		});
	})
	.catch(err => console.error(err))
	.finally(() => { 
		console.log("requests resolved");
		combinedResponses.then(data => console.log(data));
	});
}

export { resolvePromises };