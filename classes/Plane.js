const Airport = require('./Airport');

class Plane {
    #passengers;
    constructor(company, destination) {
        this.company=company;
        this.origin = Airport.airportCode;
        this.destination = destination;
        this.#passengers=[];
    }
    getPassengers(){
        return this.#passengers;
    }
    addPassenger(passenger){
        this.#passengers.push(passenger);
    }
}


module.exports = Plane;