//  spread operator(...)
//  rest operator
//  Distructureing


{
// learn spread operator
const user1=["rohim","korim","jorim"]
const user2=["rofiq","shofiq","tofiq"]
user1.push(...user2)


const room1={
    nurnoby:"Backnd Developer",
    nasim:"DBMS"
}
const room2={
    tahmid:"frontend Developer",
    mamun:"Accountent Manager"
}

const flatMemberDesignation = {
    ...room1,
    ...room2
}

// learn rest operator

const frinedList = (...friends:string[])=>{
return friends.forEach((friend:string)=>console.log(`Hi, ${friend}`))
}

frinedList("rohim","korim","jorim")






}