import {Bag} from "../src/bag"

describe('Bag Tests', () => {
    let bagTemplate = "Bag: [aaaaaaaaabbccddddeeeeeeeeeffggghhiiiiiiiiiiiijkllllllmmnnnnnnoooooooooppqrrrrrrssssttttttuuuuvvwwxyyz]101";
    test('Bag starts full', () => {
        const bag = new Bag();
        let bagString = bag.toString();
        expect(bagString).toEqual(bagTemplate);
    });

    //test draw, isEmpty, etc
})

