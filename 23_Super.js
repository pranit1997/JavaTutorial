class Animal {
  constructor(name) 
  {
    this.name = name;
    } 
printname() 
{
    console.log(this.name);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  printInfo() {
    this.printname();
    console.log(this.breed);
  }
}
