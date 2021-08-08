const pass = require('./password');

describe.skip("filter function", () => {
	test("filter line -> 1-3 a: abcde", () => {
		expect(pass.filter("1-3 a: abcde")).toEqual(
			expect.arrayContaining([1, 3, "a", "abcde"]));
	})

	test("filter line -> 1-3 b: cdefg", () => {
		expect(pass.filter("1-3 b: cdefg")).toEqual(
			expect.arrayContaining([1, 3, "b", "cdefg"]));
	})

	test("filter line -> 14-15 s: sssssssssssssds", () => {
		expect(pass.filter("14-15 s: sssssssssssssds")).toEqual(
			expect.arrayContaining([14, 15, "s", "sssssssssssssds"]));
	})
});

describe.skip("password function", () => {
	/*
		1-3 a: abcde
		1-3 b: cdefg
		2-9 c: ccccccccc
	*/
  test("policy 1-3 a: abcde is Valid", () => {
    expect(pass.isValid('a', 1, 3, "abcde")).toBeTruthy();
  });

	test("policy 1-3 b: cdefg is Invalid", () => {
    expect(pass.isValid('b', 1, 3, "cdefg")).toBeFalsy();
  });

	test("policy 2-9 c: ccccccccc is Valid", () => {
    expect(pass.isValid('c', 2, 9, "ccccccccc")).toBeTruthy();
  });
});

describe("password function isValidv2", () => {
	/*
		1-3 a: abcde
		1-3 b: cdefg
		2-9 c: ccccccccc
	*/
  test("policy 1-3 a: abcde is Valid", () => {
    expect(pass.isValidV2('a', 1, 3, "abcde")).toBeTruthy();
  });

	test("policy 1-3 b: cdefg is Invalid", () => {
    expect(pass.isValidV2('b', 1, 3, "cdefg")).toBeFalsy();
  });

	test("policy 2-9 c: ccccccccc is Valid", () => {
    expect(pass.isValidV2('c', 2, 9, "ccccccccc")).toBeFalsy();
  });
});
