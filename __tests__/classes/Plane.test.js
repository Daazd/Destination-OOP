const Plane = require('../../classes/Plane');
const Person = require('../../classes/Person');

describe('Plane', () => {
    test('plane should have a company, origin, destination, and empty passengers array at initialization', () => {
        const plane = new Plane('Delta','LAX');
        expect(plane.company).toBe('Delta');
        expect(plane.origin).toBe('JFK');
        expect(plane.destination).toBe('LAX');
        expect(plane.getPassengers()).toEqual([]);
    });
    test('plane should be able to add passengers', () => {
        const plane = new Plane('Delta', 'LAX');
        const passenger = new Person('John Doe');
        plane.addPassenger(passenger);
        expect(plane.getPassengers()).toEqual(passenger);
    });
});