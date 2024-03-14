const Bag = require('../Bag');

test("instance created", () => {
    const bag = new bag(3, 'prada')
    expect(bag).instanceof(Bag)
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
    const person = {}
    bag.assignOwner(person)
    expect(bag.getOwner()).toBe(person)
});