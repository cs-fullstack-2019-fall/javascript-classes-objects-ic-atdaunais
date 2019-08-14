//WORKING
class CodeSchoolInstructor{
    constructor(teacherName, previousEmployer, knownLangauges) {
        this.name = teacherName;
        this.employ = previousEmployer;
        this.lang = knownLangauges;
    }
    changeName(changed){
        this.name = changed
    }
}
let kennGibbs = new CodeSchoolInstructor("Kenn Gibbs", "Code School", "English");
console.log(kennGibbs);

kennGibbs.changeName("Kevin Yancy");
console.log(kennGibbs);

//WORKING
class ToDo{
    constructor(name, dueDate, list){
        this.name = name;
        this.dueDate = dueDate;
        this.list = list;
    }
    appendList(added){
        this.list.push(added);
    }
}
let myChore = new ToDo("My Chore List", "tommorrow", ["clean the shag carpeting", "pet my snake"]);
console.log(myChore.list);

myChore.appendList("clean room");
console.log(myChore.list);
myChore.appendList("take out trash");
console.log(myChore.list);
myChore.appendList(2);
console.log(myChore.list);

//WORKING
class Dog{
    constructor(name, breed, color, gender){
        this.name = name;
        this.breed = breed;
        this.color = color;
        this.gender = gender;
    }
    printProp(){
        console.log(this.name);
        console.log(this.breed);
        console.log(this.color);
        console.log(this.gender);
    }
    changeColor(newColor){
        newColor = prompt("Pick a new color for your dog.");
        this.color = newColor
    }
}
let myPup = new Dog("Lucky", "Westy", "White", "Male");
myPup.printProp();

myPup.changeColor();
myPup.printProp();

//WORKING
class Product{
    constructor(price, quantity, name){
        this.price = price;
        this.quantity = quantity;
        this.name = name;
    }
    printProp(){
        console.log(this.name + ", price: " + this.price + ", amount: " + this.quantity);
    }
}

let fruit = new Product("$5.50", 5, "Apples");
fruit.printProp();