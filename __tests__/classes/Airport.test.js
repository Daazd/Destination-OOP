const Airport = require('../../classes/Airport');

describe('Airport', () => {
    test("airport should have a static property airportCode that is equal to 'JFK'", () => {
        expect(Airport.airportCode).toBe('JFK');
    });
    test('airport should have a name and a private empty planes array on initialization', () => {
        const airport = new Airport('JFK');
        expect(airport.name).toBe('JFK');
        expect(airport.getPlanes()).toEqual([]);
    });
    test('airport should be able to add a plane', () => {
        const airport = new Airport('JFK');
        const plane = { company: 'Delta', origin: 'JFK', destination: 'LAX', passengers: [] };
        airport.addPlane(plane);
        expect(airport.getPlanes()).toEqual([plane]);
    });
});