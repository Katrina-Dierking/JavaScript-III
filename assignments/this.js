/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: Pointing to the whole forest (or window) without anything in particular.
* 2. Implicit Binding: automatic. Pointing to a particular tree in the forest. 
* 3. Explicit Binding: Using call or bind. Call is immediate while bind can hold it until you need to call on it later. 
* 4. New Binding: creates a blank JS Object, links one obj to another obj, passes newly created obj as "this" context, and returns "this" if function doesn't return its own obj. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);




// Principle 2

// code example for Implicit Binding

const hobbit  = {
    name: "Sam wise", 
    age: 102,
    food: "taters",
    cook: function () {
        return `${this.name} loves to cook ${this.food}`;
    }
}
console.log(hobbit.cook());






// Principle 3

// code example for New Binding

function Parent(attributes) {
    this.newAge = attributes.age;
    this.newName = attributes.name;
    this.newLocation = attributes.location;
    this.newPhrase = attributes.phrase;
    this.speak = function() {
    return '${this.newName} says ${this.newPhrase}';
    }
}

Const fred = newParent ({
age: 35,
name: "Fred",
location: "Bedrock",
phrase: "Yabba dabba do"
});
console.log(fred.speak());




// Principle 4

// code example for Explicit Binding

function greet (lang1, lang2, lang3) {
    alert(
      `Hello, my name is ${this.name} and I know ${lang1}, ${lang2}, and ${lang3}`
    )
  }
  
  const user = {
    name: 'Kalynn',
  }
  
  const languages = ['JavaScript', 'PHP', 'React']
  
  const newLang = greet.bind(user, languages[0], languages[1], languages[2])
  newLang()