1. Create a Basic JavaScript Object
```js
let dog = {
  name: "Dobar Man",
  numLegs: 4
};
```

2. Use Dot Notation to Access the Properties of an Object
```js
let dog = {
  name: "Spot",
  numLegs: 4
};

console.log(dog.name);
console.log(dog.numLegs);
```

3. Create a Method on an Object
```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {
    return "This dog has " + dog.numLegs + " legs.";
  }
};

dog.sayLegs();
```

4. Make Code More Reusable with the this Keyword
```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () { return "This dog has " + this.numLegs + " legs."; }
};

dog.sayLegs();
```

5. Define a Constructor Function
```js
function Dog() {
  this.name = 'Dog';
  this.color = "black";
  this.numLegs = 4;
}
```

6. Use a constructor to create objects
```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}

let hound = new Dog();
```

7. Extend Constructors to Receive Arguments
```js
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog("Terrier", "brown");
```

8. Verify an Object's Constructor with instanceof
```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(4);
myHouse instanceof House;
```

9. Understand Own Properties
```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
```

10. Use Prototype Properties to Reduce Duplicate Code
```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

// Only change code above this line
let beagle = new Dog("Snoopy");
```

11. Iterate Over All Properties
```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line

for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}
```

12. Understand the Constructor Property
```js
function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}
```

13. Change the Prototype to a New Object
```js
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 4,
  eat: function () {
    console.log("eating biscuits");
  },
  describe: function () {
    console.log("sleeping");
  }
};
```


14. Remember to Set the Constructor Property when Changing the Prototype
```js
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  }
};
```

15. Understand Where an Object’s Prototype Comes From
```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);
```

16. Understand the Prototype Chain
```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
Object.prototype.isPrototypeOf(Dog.prototype);
```

17. Use Inheritance So You Don't Repeat Yourself
```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,

};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  }
};
```

18. Inherit Behaviors from a Supertype
```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  }
};

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);
duck.eat();
beagle.eat();
```

19. Set the Child's Prototype to an Instance of the Parent
```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  }
};

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();
```

20. Reset an Inherited Constructor Property
```js
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();
```

21. Add Methods After Inheritance
```js
function Animal() { }
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog
Dog.prototype.bark = function () {
  console.log("Woof!");
}

let beagle = new Dog();
beagle.eat();
beagle.bark();
```

22. Override Inherited Methods
```js
function Bird() { }
Bird.prototype.fly = function () { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = function () {
  return "Alas, this is a flightless bird.";
}

let penguin = new Penguin();
console.log(penguin.fly());
```

23. Use a Mixin to Add Common Behavior Between Unrelated Objects
```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function (obj) {
  obj.glide = function () {
    console.log('glide');
  }
};

glideMixin(bird);
glideMixin(boat);
bird.glide();
boat.glide();
```

24. Use Closure to Protect Properties Within an Object from Being Modified Externally
```js
function Bird() {
  let weight = 15;

  this.getWeight = function () {
    return weight;
  }
}

let duck = new Bird();
duck.getWeight();
```

25. Understand the Immediately Invoked Function Expression (IIFE
```js
(function () {
  console.log("A cozy nest is ready");
})();
```

26. Use an IIFE to Create a Module
```js
let funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.isCute = function () {
        return true;
      };
    },
    singMixin: function (obj) {
      obj.sing = function () {
        console.log("Singing to an awesome tune");
      };
    }
  };
})();
```