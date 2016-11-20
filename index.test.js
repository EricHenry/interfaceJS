const Interface = require('./src/index.js');

describe('Creating a new interface', () => {
    it('creates an interface with valid allowed types', () => {
        let {id, props, implement} = Interface.create('person', {
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
        expect(typeof implement).toBe('function');
    });

    it('cannot create interface with unknown types', () => {
        expect(() => (
            Interface.create('dog', {
                breed: 'nunber', //invalid type
                bark: 'functions',
            })
        ))
        .toThrow();
    });
});

let personInterface = Interface.create('person', {
    name: 'string',
    age: 'number',
    greet: 'function',
}); 
//successfully implement an interfac    e
let sarah = personInterface.implement({
  name: 'sarah',
  age: 22,
  greet() { console.log(`hi my name is ${this.name}`); },
});

// see the out put
for (var key in sarah) {
  console.log(`${key} -> ${sarah[key]}`);
}
// greet everyone!
sarah.greet();

//unsuccessfully implment, wrong type
// wrap in try/catch to show that error is caught
try {
    let brittany = personInterface.implement({
        name: 'Brittany',
        age: '26',
        greet() { console.log(`Hi, dummies I'm ${this.name} and I'm ${this.age}`)},
    })
} catch (e) {
    console.log(`unsuccessful interface implementation \n error -> ${e.message}`)
}

//unsuccessfully implment, missing property
// wrap in try/catch to show that error is caught
try {
    let brittany = personInterface.implement({
        name: 'Brittany',
        greet() { console.log(`Hi, dummies I'm ${this.name} and I'm ${this.age}`)},
    })
} catch (e) {
    console.log(`unsuccessful interface implementation \n error -> ${e.message}`)
}

//unsuccessfully implment, including a property that is not defined in the interface
// wrap in try/catch to show that error is caught
try {
    let brittany = personInterface.implement({
        name: 'Brittany',
        age: 25,
        id: 'S2324356',
        greet() { console.log(`Hi, dummies I'm ${this.name} and I'm ${this.age}`)},
    })
} catch (e) {
    console.log(`unsuccessful interface implementation \n error -> ${e.message}`)
}
