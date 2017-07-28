export const Father = {
    id: 1,
    firstName: 'Ned',
    lastName: 'Stark',
    gender: 'male',
    house: 'Stark',
    isAlive: false,
    father: undefined,
    mother: undefined,
    siblings: [],
    children: [3]
};

export const Mother = {
    id: 2,
    firstName: 'Catelyn',
    lastName: 'Stark',
    gender: 'female',
    house: 'Stark',
    isAlive: false,
    father: undefined,
    mother: undefined,
    siblings: [],
    children: [3]
};

export const Child = {
    id: 3,
    firstName: 'Arya',
    lastName: 'Stark',
    gender: 'female',
    house: 'Stark',
    isAlive: true,
    father: 1,
    mother: 2,
    siblings: [],
    children: []
};

export const Characters = [
    Father, Mother, Child
];