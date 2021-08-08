function isValid(policyLetter, policyMin, policyMax, input){
	const nr = input.split("").filter(x => x == policyLetter).length;
	return nr >= policyMin && nr <= policyMax;
}

function isValidV2(policyLetter, policyMin, policyMax, input){
	return (input[policyMin - 1] == policyLetter && input[policyMax - 1] != policyLetter) || (input[policyMin - 1] != policyLetter && input[policyMax - 1] == policyLetter);
}

function filter(input){
	const foundNumbers = input.match(/[\d]{1,}/gm);
	// letter
	const foundLetter = input.match(/.:/gm).toString().substring(0,1);
	// input
	let foundInput = input.match(/:.*/gm);
	foundInput = foundInput.toString().substring(2);
	//
	return [ 
		parseInt(foundNumbers[0]), 
		parseInt(foundNumbers[1]), 
		foundLetter, 
		foundInput
	];
}

module.exports = {
	isValid,
	isValidV2,
	filter
}