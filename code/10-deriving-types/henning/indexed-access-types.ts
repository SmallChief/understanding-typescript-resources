// const appUser = {
//   name: "Max",
//   age: 35,
//   permissions: [
//     {
//       id: "p1",
//       title: "Admin",
//       description: "Admin account",
//     },
//   ],
// };

// type AppUser = typeof appUser;

type AppUser = {
  name: string;
  age: number;
  permissions: {
    id: string;
    title: string;
    description: string;
  }[];
};

type Perms = AppUser["permissions"]; // Accessing the permissions key, extracting its type (Array of objects)

type Perm = Perms[number]; // Extract the type of a single object
