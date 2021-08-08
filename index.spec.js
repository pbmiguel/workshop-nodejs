const cache = require('./index');

test("output is the same", () => {
	//
	var complexFunction = function() { 
		return Math.random(0, 1); 
	};

	var cachedFunction = cache(complexFunction);

	//
	expect(cachedFunction()).toEqual(cachedFunction());
	expect(complexFunction()).not.toEqual(complexFunction());
});
