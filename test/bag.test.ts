import {Bag} from "../src/core/Bag"

describe('Bag Tests', () => {
    let bagTemplate = "Bag: [aaaaaaaaabbccddddeeeeeeeeeffggghhiiiiiiiiiiiijkllllllmmnnnnnnoooooooooppqrrrrrrssssttttttuuuuvvwwxyyz]101";
    test('Bag starts full', () => {
        const bag = Bag.getInstance();
        let bagString = bag.toString();
        expect(bagString).toEqual(bagTemplate);
    });

    //test draw, isEmpty, etc
})

