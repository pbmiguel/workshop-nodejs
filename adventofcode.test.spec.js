const adventofcode = require('./adventofcode');


describe("advent of code day 3", () => {
	test("check toArray method", () => {
		const input = `.#.#\n...#`
		
		const res = adventofcode.toArray(input);
		expect(res[0]).toEqual(['.', '#', '.', '#'])
		expect(res[1]).toEqual(['.', '.', '.', '#'])
	})

	test("check run method", () => {
		const input = `.#.#\n...#`
		
		const res = adventofcode.run(input);
		expect(res).toEqual(1)
	})
})