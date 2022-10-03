import { expect, it } from 'vitest';

// type Params = {
//   first: number;
//   second: number;
// };

// The difference between type and interface is that type is a type definition, while interface is a contract and can only represent objects

export const addTwoNumbers = (params: { first: number; second: number }) => {
  return params.first + params.second;
};

it('Should add the two numbers together', () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    })
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    })
  ).toEqual(30);
});
