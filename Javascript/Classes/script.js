class Human
{
    //properties
    name;
    age = 13;
    #weight;
    height;
    //methods
    walking()
    {
        console.log("Hi,I am walking");
    }
    running()
    {
        console.log("Hi,I am running");
    }
    //Constructors
    constructor(newWeight,newHeight)
    {
        this.weight = newWeight;
        this.height = newHeight;
    }
    //Getter and Setter
    get fetchWeight()
    {
        return this.#weight;
    }
    set modifyWeight(val)
    {
        this.#weight = val;
    }
};
//Default parameter
    function sayName(fName = 'Vanshika',lName = 'Kainth') {
        console.log(fName,lName);
    }
let obj = new Human(89,123);
console.log(obj.age);
console.log(obj.weight);
console.log(obj.height);
sayName();
obj.walking();
obj.running();