function create(id, props) {
 function implement(obj) {
    let newObj = {};
    let proto = {};
    let keys = Object.keys(obj);

    keys.forEach((key) => { 
      if (!props[key]) {
        throw new Error(`${key} is not defined in the interface`);
      }
      if (props[key] !== typeof obj[key]) {
        throw new Error(`property ${key} is the wrong type.`);
      }
      
      if (props[key] === 'function') {
        proto[key] = obj[key];
        return;
      }
      
      newObj[key] = obj[key];
    });

    Object
        .keys(props)
        .forEach(key => {
            let propertyIsDefined = keys.indexOf(key) >= 0;

            if (propertyIsDefined) { 
                return; 
            }

            throw new Error(`${key} needs to be defined to implement this interface`);
        });

    var toReturn = Object.assign(Object.create(proto), newObj);
    return toReturn;
  }

  return {
      id,
      props,
      implement, 
  }
}

const Interface = {create};

let personInterface = Interface.create('person', {
  name: 'string',
  age: 'number',
  greet: 'function',
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
