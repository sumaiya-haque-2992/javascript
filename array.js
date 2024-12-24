// let friendlist = ["sadia", "suhana", "sayra", "samia"];
// console.log(friendlist);

// let friendlist = ["sadia", "suhana", "sayra", "samia"];
// console.log(typeof(friendlist));

// let friendlist = ["sadia", "suhana", "sayra", "samia"];
// let number = [20, 22, 24, 21];
// friendlist.push("shara");
// friendlist.pop("sadia");
// console.log(friendlist);


// let friendlist = ["sadia", "suhana", "sayra", "samia"];
// let number = [20, 22, 24, 21];
// number.unshift(23);
// console.log(number)


// let friendlist = ["sadia", "suhana", "sayra", "samia"];
// let number = [20, 22, 24, 21];
// number.shift();
// console.log(number);



// friendlist = ["sadia", "suhana", "sayra", "samia"];
// let number = [20, 22, 24, 21];
// let num = number.at(2);
// console.log(num)


// friendlist = ["sadia", "suhana", "sayra", "samia"];
// let number = [20, 22, 24, 21];
// let num = delete number[2];
// console.log(number);


// let number = [[20, 13], [22, 19], [24, 21]];
// let arr = number.flat();
// console.log(arr);


// friendlist1 = ["sumu", "mumu", "rimu"];
// friendlist2 = ["minu", "nila"];
// let con = friendlist1.concat(friendlist2);
// console.log(con);


// let number = [20, 22, 24, 21];
// let con = number.concat(25);
// console.log(con);


// friendlist = ["sadia", "suhana", "sayra", "samia", "mim", "ina"];
// let slice = friendlist.slice(1, 2);
// console.log(slice);


// friendlist = ["sadia", "suhana", "sayra", "samia"];
// let index = friendlist.indexOf("sayra");
// console.log(index);


// friendlist = ["sadia", "suhana", "sayra", "samia"];
// let index = friendlist.indexOf("sayrahh");
// console.log(index);


// friendlist = ["sadia", "suhana", "sayra", "samia"];
// let includes = friendlist.includes("sayra");
// console.log(includes);

// friendlist = ["sadia", "suhana", "sayra", "samia"];
// let includes = friendlist.includes("sayrah");
// console.log(includes);



// let movies = ['super man', 'bat man', 'captain america', 'iron man'];
// console.log(movies)



// let user = [
//     {
//         name: 'akkas',
//         fathersName: 'jakkas',
//         old: 20
//     },
//     {
//         name: 'abul',
//         fathersName: 'babul',
//         old: 20
//     },
//     {
//         name: 'helal',
//         fathersName: 'bellal',
//         old: 20
//     },
//     {
//         name: 'mukit',
//         fathersName: 'nukit',
//         old: 20
//     },
//     {
//         name: 'kabul',
//         fathersName: 'tabul',
//         old: 20
//     }
// ]
// console.log(user[2].name);



const users = [
    {
        id: 1,
        name: 'Sumaiya Haque',
        age: 22,
        email: 'sumaiyahaque2992@gmail.com',
        phone: '01603337197',
        address: {
            street: '125 Main st',
            city: 'New York',
            state: 'NY',
            zip: '2992'
        },
        occupation: 'Web Developer',
        hobbies: ['Painting', 'Traveling', 'Reading']
    },
    {
        id: 2,
        name: 'Sumaiya Haque',
        age: 22,
        email: 'sumaiyahaque2992@gmail.com',
        phone: '01603337197',
        address: {
            street: '125 Main st',
            city: 'New York',
            state: 'NY',
            zip: '2992'
        },
        occupation: 'Web Developer',
        hobbies: ['Painting', 'Traveling', 'Reading']
    },
    {
        id: 3,
        name: 'Sumaiya Haque',
        age: 22,
        email: 'sumaiyahaque2992@gmail.com',
        phone: '01603337197',
        address: {
            street: '125 Main st',
            city: 'New York',
            state: 'NY',
            zip: '2992'
        },
        occupation: 'Web Developer',
        hobbies: ['Painting', 'Traveling', 'Reading']
    },
    {
        id: 4,
        name: 'Sumaiya Haque',
        age: 22,
        email: 'sumaiyahaque2992@gmail.com',
        phone: '01603337197',
        address: {
            street: '125 Main st',
            city: 'New York',
            state: 'NY',
            zip: '2992'
        },
        occupation: 'Web Developer',
        hobbies: ['Painting', 'Traveling', 'Reading']
    },
    {
        id: 5,
        name: 'Sumaiya Haque',
        age: 22,
        email: 'sumaiyahaque2992@gmail.com',
        phone: '01603337197',
        address: {
            street: '125 Main st',
            city: 'New York',
            state: 'NY',
            zip: '2992'
        },
        occupation: 'Web Developer',
        hobbies: ['Painting', 'Traveling', 'Reading']
    },
]
// console.log(users[0].address.city)
// console.log(users[0].hobbies[2])
for(let i = 0; i <users.length; i++){
    console.log(users[i]);