const url1 = 'https://catfact.ninja/fact';
const url2 = 'https://api.coindesk.com/v1/bpi/currentprice.json';
const url3 = 'https://www.boredapi.com/api/activity';

function resolvePromises() {
	fetch(url1)
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.error(err));
}

export { resolvePromises };