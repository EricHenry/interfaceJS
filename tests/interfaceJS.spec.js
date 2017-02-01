const { invalidPropError, missingPropError, unknownTypesError, wrongTypeError } = require('../dist/.errors/_errors.js');
const { create, implement } = require('../dist/interfaceJS.js');

describe('Creating a new interface', () => {
    it('creates an interface with valid allowed types', () => {
        let {id, props} = create('person', {
            name: 'string',
            age: 'number',
            greet: 'function',
        });

        expect(id).toBe('person');
        expect(props).toEqual({
            name: 'string',
            age: 'number',
            greet: 'function',
        });
    });

    it('cannot create interface with unknown types', () => {
        expect(() => (
            create('dog', {
                breed: 'nunber', //invalid type
                bark: 'functions',
            })
        ))
        .toThrowError(unknownTypesError);
    });
});

describe('Implement an interface by creating an object', () => {
    let personInterface;
    beforeAll(() => {
        personInterface = create('person', {
            nickname: 'string',
            age: 'number',
            greet: 'function',
        });
    });

    it('should correctly create an object implementing the interface if all types and properties are passed', () =>{
        expect(() => (
            implement(personInterface, {
                nickname: 'Henry',
                age: 22,
                greet() { return `hi my name is ${this.name}`; },
            })
        )).not.toThrow();
    });

    it('should add defined functions to the object\'s prototype', () => {
        let brittany = implement(personInterface, {
            nickname: 'Brinny',
            age: 25,
            greet() { return `Howdy all! I'm ${this.name}`; },
        });

        expect(typeof brittany.__proto__.greet).toBe('function');
    })

    it('should throw an error if the wrong type is passed as the implementing object', () => {
        expect(() => (
            implement(personInterface, {
                nickname: 'Brinny',
                age: '26',
                greet() { return `Hi everyone, I'm ${this.name} and I'm ${this.age}`; },
            })
        )).toThrowError(wrongTypeError);
    });

    it('should throw an error if an interface\'s prop is not defined when implementing', () => {
        expect(() => (
            implement(personInterface, {
                nickname: 'Brinny',
                greet() { return `Hi everyone, I'm ${this.name} and I'm ${this.age}`; },
            })
        )).toThrowError(missingPropError);
    });

    it('should throw a custom error if trying to add a property that is not defined in the interface', () => {
        expect(() => (
            implement(personInterface, {
                nickname: 'Brinny',
                age: 25,
                id: 'S2324356',
                greet() { return `Hi everyone, I'm ${this.name} and I'm ${this.age}`; },
            })
        )).toThrowError(invalidPropError);
    });
});
