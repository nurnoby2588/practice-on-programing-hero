//  spread operator(...)
//  rest operator
//  Distructureing


{
    // learn spread operator
    const user1 = ["rohim", "korim", "jorim"]
    const user2 = ["rofiq", "shofiq", "tofiq"]
    user1.push(...user2)


    const room1 = {
        nurnoby: "Backnd Developer",
        nasim: "DBMS"
    }
    const room2 = {
        tahmid: "frontend Developer",
        mamun: "Accountent Manager"
    }

    const flatMemberDesignation = {
        ...room1,
        ...room2
    }

    // learn rest operator

    const frinedList = (...friends: string[]) => {
        return friends.forEach((friend: string) => console.log(`Hi, ${friend}`))
    }

    frinedList("rohim", "korim", "jorim")

    // learn destructring

    const userdata = {
        id: 2588,
        name: {
            firstName: "nurnoby",
            lastName: "rahaman"
        },
        contact: "01710258850",
        address: "Dhaka"
    };

    const { id,
        name: { firstName: fName }
    } = userdata
     console.log(fName) // output -> nurnoby

 // array destructring

 const people = ["rohim", "korim", "jorim","rofiq", "shofiq", "tofiq"]
 const [a,b,,friend,...rest]=people; // Index ar opor nirvor kore array destructring kora hoy. 
 console.log(a) // output -> rohim
 console.log(b) // output -> korim
 console.log(friend) // output -> jorim
 console.log(...rest) // output -> ["rofiq", "shofiq", "tofiq"]




}