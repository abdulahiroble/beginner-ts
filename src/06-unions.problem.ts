// interface User {
//   id: number;
//   firstName: string;
//   lastName: string;
//   /**
//    * How do we ensure that role is only one of:
//    * - 'admin'
//    * - 'user'
//    * - 'super-admin'
//    */
//   role: 'admin' | 'user' | 'super-admin';
// }

type User =
  | ({
      id: number;
      firstName: string;
      lastName: string;
    } & {
      role: 'admin';
      adminPassword: string;
    })
  | {
      role: 'user';
    }
  | {
      role: 'super-admin';
      superAdminPassword: string;
    };

// A union type is a type that represents one or more types.

// Intersection types are a way to combine types.

// A descriminated union type is a way to describe a union type that has a known set of possible types.

// type Role = 'admin' | 'user' | 'super-admin';

export const defaultUser: User = {
  id: 1,
  firstName: 'Matt',
  lastName: 'Pocock',
  role: 'admin',
  adminPassword: 'password',
};
