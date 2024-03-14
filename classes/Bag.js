class Bag {
    constructor(weight, id) {
        this.weight = weight;
        this.id = id;
        this.owner = null;

    }

    getOwner() {
        return this.owner
    }
    
    assignOwner(person) {
        this.owner = person
    }

}



module.exports = Bag;