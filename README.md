![interfaceJS] (interfaceJS_logo.png)

A simple lightweight api to create, implement, and compose interfaces.

This is a work in progress. The API will probably change. Please be aware if you are using the library.

## What is an interface?

What does it mean to create an interface? Basically you are defining a contract. 
That contract is between the interface's structure (the properties & types of those properties) 
and an object you are creating. That contract guarantees that any object that you create of that 
interface will have the same structure as the interface.  

## Why should I use this?

This library is meant to provide a way to define and use interfaces natively without needing a 
transpiler. With this library you can define these strict contracts. Building objects from these 
contracts gives you error checking so you can guarantee that the structure of the object you are creating
matches the interface you want to implement.

## How to use

### `create()`

To create an interface, provide the interface `create()` method with two arguments. 
The first argument is the name of the interface, this should be a unique identifier among all interfaces.
The second argument is an object that defines the interface. The keys are the names of the properties while 
the values are the types those properties should hold.

`create()` will return an immutable (frozen) object. 
Right now that object has an id (the passed interface name) 
and the properties defining that interface.

```JavaScript
// creating an interface 
const personInterface = Interface.create('person', {
    nickname: 'string', //nickname will be prop of the implementing object and its value has to be a string.
    age: 'number',
    greet: 'function',
});
```

### `implement()`

To implement an interface, provide the interface `implement()` method two arguments. 
First is the interface that you want to implement. The second argument is the object 
that you are creating.

`implement()` will return a new object with the defined properties and values. 
any function will be put on the object's prototype. Before returning, this object will check
against the interface to make sure the object being created matches the interface's structure.

```JavaScript
let brittany = Interface.implement(personInterface, {
    nickname: 'Brinny',
    age: 25,
    greet() { return `Hello! Call me ${this.nickname} and I'm ${this.age}.`; }
});
```

### `compose()`

TODO

## Pitfalls

1. Because this a library and not a transpiler, errors when implementing an interface 
will only be thrown at runtime. This is not as nice as having compile time errors. A possible 
workaround would be to make an eslint plugin. (or some other work around)

2. Right now the library only handles built in types. I would like to handle full function signatures
and other interfaces as types. As well as adding types defined in node js.

3. There are probably other things wrong with this idea. Please open an issue to tell me more short
comings of this library.

## More To Come

1. handle more types. (custom and node types)
2. handle function signatures.
3. handle optional types.
4. allow other interfaces to be types.
5. implement a compose function to create a new interface from existing interface.
6. add a linter and linting rules.
7. add some sort of build process.
8. create function to check against interfaces being passed to functions as parameters.
9. suggestions and ideas?!

## Contributing

I encourage anyone to open an issue with a problem or suggestion. 
Anyone may also submit a pull request with a fix/suggestion/or new feature. I will work to 
fully flesh out the Contributing document as well as providing linting rules and a build process 
for anyone who wished to contribute.