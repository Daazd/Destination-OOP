const Bag = require('../../classes/Bag');
const Person = require('../../classes/Person');

test("instance created", () => {
    const bag = new Bag(3, 'prada')
    expect(bag).toBeInstanceOf(Bag)
});

test('weight and id', () => {
    const weight = 3;
    const id = 'prada';
    const bag = new Bag(weight, id)
    expect(bag.weight).toBe(weight)
    expect(bag.id).toBe(id)
});

test('get initial owner', () => {
    const bag = new Bag(3, 'prada')
    expect(bag.getOwner()).toBeNull()
});

test('assign owner to bag', () => {
    const bag = new Bag(3, 'prada')
    const person = new Person('John Doe')
    bag.assignOwner(person)
    expect(bag.getOwner()).toBe(person)
});