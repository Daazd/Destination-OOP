const Person = require('../../classes/Person');
const Bag = require('../../classes/Bag');

describe('Person', () => {
    test('should return an instance of the Person class', () => {
        const person = new Person('Tom', 'Sawyer');
        expect(person).toBeInstanceOf(Person);
    });

    test('should return name and destination properly', () => {
        const person = new Person('Tom', 'Sawyer');
        expect(person.name).toBe('Tom');
        expect(person.destination).toBe('Sawyer');
    });

    test('should initialize empty array of bag', () => {
        const person = new Person('Tom', 'Sawyer');
        expect(person.bag).toEqual([]);
    });

    test('should use addBags() to add a bag to the bags array', () => {
        const person = new Person('Tom', 'Sawyer');
        const bag1 = new Bag(3, 'prada');
        person.addBag(bag1);
        expect(person.bag).toEqual([bag1]);
    });
});
