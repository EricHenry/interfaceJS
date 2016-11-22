![interfaceJS] (interfaceJS_logo.png)

A simple lightweight api to create, implement, and -compose- interfaces.

## How to use

To create an interface, provide the interface `create()` method with two arguments. 
The first argument is the name of the interface, this should be a unique identifier among all interfaces.
The second argument is an object that defines the interface. The keys are the names of the properties while 
the values are the types those properties should hold.

```JavaScript
// creating an interface 
let personInterface = Interface.create('person', {
    nickname: 'string', //nickname will be prop of the implementing object and its value has to be a string.
    age: 'number',
    greet: 'function',
});
```

## Pitfalls

## More To Come

## Contributing
