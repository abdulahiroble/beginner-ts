import { expect, it } from 'vitest';
import { Equal, Expect } from './helpers/type-utils';

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

type CreateUser = () => Promise<string>;

type getUser = (id: string) => Promise<User>;

const createThenGetUser = async (
  createUser: CreateUser,
  getUser: getUser
): Promise<User> => {
  const userId: string = await createUser();

  const user = await getUser(userId);

  return user;
};

it('Should create the user, then get them', async () => {
  const user = await createThenGetUser(
    async () => '123',
    async (id) => ({
      id: '123',
      firstName: 'Matt',
      lastName: 'Pocock',
    })
  );

  expect(user).toEqual({
    id: '123',
    firstName: 'Matt',
    lastName: 'Pocock',
  });
});
