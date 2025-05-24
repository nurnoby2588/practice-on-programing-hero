// type alias
{
// object type alias

type Student={
    name: string;
    age:number;
    contact?:string;
    address:string
}
    


const student1 : Student={
    name:"nurnoby",
    age:26,
    contact:"01710258850",
    address:"Tangail"
}
const student2 : Student={
    name:"Nasim",
    age:27,
    address:"Sirajgonj"
}

// String type alias
type userName= string;

let name : userName = "nurnoby"

// function type alias
type Add = (num1:number,num2:number)=> number; 

const add:Add =(num1, num2)=>{
    return num1 + num2
}




}