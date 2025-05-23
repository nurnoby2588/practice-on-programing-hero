//normal function
function add(num1: number, num2: number): number {
    return num1 + num2
}

add(2, 6);

// arrow function

const addArrow = (num1: number, num2: number): number => num1 + num2
addArrow(6, 8);

// When a function stands into a object that function is method

const infoFunctoin = {
    name: "nurnoby",
    age: 26,
    ageCount(age: number):number {
        return this.age + age;
    }
}
infoFunctoin.ageCount(5)

const value:number[]=[1,5,6]
const newValue:number[] = value.map((ele:number):number=>ele*ele)