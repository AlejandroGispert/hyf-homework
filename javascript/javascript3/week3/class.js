class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.print();
  }
  print() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const lex = new Person("Pepe", 19);

console.log(lex);
