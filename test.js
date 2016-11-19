import Interface from './src/index.js';

let personInterface = Interface.create('person', {
  name: 'string',
  age: 'number',
  greet: 'function',
});

//invalid interface
let dogInterface = Interface.create('dog', {
    breed: 'nunber', //invalid type
    bark: 'functions',
});

//successfully implement an interface
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
