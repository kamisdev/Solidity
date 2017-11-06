
var Web3 = require('web3');

var web = new Web3('http://localhost:8545');

var json = require('./counter.json');

var contract = new web.eth.Contract(json);

console.dir(contract.methods);
console.dir(contract.options);

var tx = contract.deploy({ data: '60606040525b60016000600050819055505b60db80601d6000396000f360606040526000357c0100000000000000000000000000000000000000000000000000000000900480631003e2d214604d5780638ada066e146067578063d09de08a14608c576049565b6002565b3460025760656004808035906020019091905050609d565b005b346002576076600480505060b3565b6040518082815260200191505060405180910390f35b34600257609b600480505060c4565b005b8060006000828282505401925050819055505b50565b6000600060005054905060c1565b90565b60006000818150548092919060010191905055505b56' });

tx.send({
	from: '0x6606168fa611afeb82fc998fd475b572ff31f957',
	gas: 3000000,
	gasPrice: 0
})
.on('receipt', function (receipt) {
	console.log('contract address', receipt.contractAddress);
});

console.log(tx.encodeABI());

console.log(contract.methods.add(1).encodeABI());

