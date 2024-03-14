const Person = require('../../classes/Person');

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
        person.addBag('bag1');
        expect(person.bag).toEqual(['bag1']);
    });
});
