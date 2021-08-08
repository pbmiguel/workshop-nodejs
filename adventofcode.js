function toArray(input){
	var out = [];
	const rows = input.split("\n");
	for(var i = 0; i < rows.length;  i++){
		const columns = rows[i].split("");
		out.push(columns);
	}
	return out;
}

function run(input){
	var forestMatrix = toArray(input);
	const slope = {vertical: 1, horizontal: 3};
	let indexV = 0, indexH = 0, nrTrees = 0;
	let isNotInBottom = true; 

	while(isNotInBottom){
		const isInTree = (forestMatrix[indexV][indexH % forestMatrix[0].length]) == '#';

		if(isInTree)
			nrTrees++;
		
		indexV += slope.vertical;
		indexH += slope.horizontal;

		isNotInBottom = indexV < forestMatrix.length;
	}

	return nrTrees;
}

function slope(horizontalSlope, verticalSlope){
	return 
}

module.exports = {
	run,
	toArray,
	slope
}