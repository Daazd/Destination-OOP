class Person {
    constructor(name, destination, bags) {
        this.name = name;
        this.destination = destination;
        this.bag = [];
    }
    addBag(bag) {
        this.bag.push(bag);
    }
    getBags() {
        return this.bag;
    }

}


module.exports = Person;