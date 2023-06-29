// let value = prompt("random number");
// value = Number(value);

// console.log(value);
// console.log(typeof value);

// const min = 1;
// const max = 6;
// const resoult_main = Math.round(Math.random() * (max - min) + min);
// console.log(resoult_main)

// const resoult_second = Math.round(Math.random() * (max - min) + min);
// console.log(resoult_second)

// const resoult = resoult_main + resoult_second;
// console.log(resoult);

// let firstName = prompt('Введіть своє ім`я.');
// firstName = firstName[0] + firstName.slice(1).toLowerCase();

// let lastName = prompt('Введіть своє прізвище.');
// lastName = lastName[0] + lastName.slice(1).toLowerCase();

// const fullName = ` ${firstName}  ${lastName} `;

// console.log(fullName)

// const message = 'Curabitur ligula sapien';
// const maxLength = 16;

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//    result = message.length <= maxLength ? message :
//      `${message.slice(0, maxLength)}...`;
//   /// Change code above this line
//   return result;
// }

// console.log(formatMessage('Curabitur ligula sapien', 16))

// const main = prompt('ДАЙ РЯДОК');
// const sec = prompt('ДАЙ ЧИСЛО');

// function jeka(string, length) {
//     const substring = string.slice(0, length);

//   return substring;
// }

// console.log(jeka(main, sec));

// let a = 6;
// let b = false;
// let c = "12";
// let d = 1;
// let result = a + d + c + b;

// result = a + Number(b) + Number(c) + d

// console.log(result);

// const number = 24;
// let resoult = 0;

// for (let i = 1; i <= number; i += 1) {

//     console.log(i)

//     resoult += i;
//     console.log(resoult)
//   }

// const min = 14;
// const max = 20;

// const number = [];

// for (let i = min; i <= max; i += 1) {
//   console.log(i)
//   number.splice(i, 0, i)
// }

// console.log(`number: `, number)

// const ar = [1, 2, 3, 4, 5];
// const va = 3;

// function includes(array, value) {
//   let bul;
// for (let resoult of array) {
//   if (resoult !== value) {
//     bul = resoult === value;
//     console.log(bul)
//     continue
//   } else {
//     bul = resoult === value
//     console.log(bul)
//     break
//   }

// }

// }

// console.log(includes(ar, va))

// const names = 'name';
// const age = 23;

// const x = {
//     names,
//     age,
//     value: ['play-1', 'play-2', 'play-3'],
// }
// console.log(x)

// x.wow = 67;
// console.log(x)

// const b = x;
// console.log(b)

// b.WAWWW = 'hello';
// console.log(x)
// console.log(b)

// const massive = [
//     { name: 'petro', age: 43, },
//     { name: 'sergey', age: 36, },
//     { name: 'grisha', age: 18, },
// ]

// function friendsAll(allFriends, oneFriend) {
//     for (const friend of allFriends) {
//         const x = Object.values(friend)
//         console.log(x)
//         if (x.includes(oneFriend)) {
//             return 'HASHLI!!!!'
//         }
//     }
// }

// console.log(friendsAll(massive, 'sergey'))

// const liza = {
//     name: 'liza',
//     address: {
//         city: 'poltava',
//         street: 'balenka',
//     },
//     age: 24,
//     addAge(x) {
//         liza.age = x;
//     }
// }

// liza.addAge(50)
// console.log(liza)

// const basket = {
//     items: [],
//     getItems() { },
//     add(x) {
//         basket.items.push(x);
//      },
//     remove() { },
//     clear() { },
//     countTotalPrice() { },
//     increaseQuntity() { },
//     decreaseQuantity() { },
// }

// basket.add({ name: 'apple', price: 50 });

// console.log(basket.items)

// function countProps(object) {
//   const xer = Object.keys(object).length;

//   const propCount = xer;
//   return propCount;
// }

// console.log(countProps({ name: "Mango", age: 2 }));

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(highIcon)

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";

//   const x = {
//     completed,
//     category,
//     priority,
//     ...data,
//     };

//   return x;

// }

// console.log(makeTask({}))
// console.log(
//   makeTask({
//     category: "Homemade",
//     priority: "Low",
//     text: "Take out the trash",
//   })
// );

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {

//       const x = this.books.indexOf(oldName);

//       this.books.splice(x, 1, newName);

//     return bookShelf.books

//   },
// };

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (let object of atTheOldToad.potions) {
//       if (object.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }

//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     for (let i = 0; i < atTheOldToad.potions.length; i += 1) {
//       const values = Object.values(atTheOldToad.potions[i]);
//       if (values.includes(potionName)) {
//         this.potions.splice(i, 1);
//       }
//     }

//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < atTheOldToad.potions.length; i += 1) {
//       const y = Object.values(atTheOldToad.potions[i]);
//         if (y.includes(oldName)) {
//             this.potions[i].name = newName;
//             return
//       }
//       }
//       return `Potion ${oldName} is not in inventory!`;

//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// console.log(atTheOldToad.potions);

// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.potions)

// const ggg = {
//   name: 1,
//   name1: 2
// }

// function xxx(object) {
//   let f = 0;

//   console.log(object)

//   return f;
// }

// xxx(ggg);

// const xxx = [
//   { name: 134, name1: 56 },
//   { name:67, name1: 67 },
//   { name: 345, name1: 78 },

// ]

// for (let key of xxx){

//   console.log(key)

//   console.log('Цикл закончился.')
// }

// function sobaka(key) {
//   let resoult = 0;
//   for (const x of key) {
//     resoult += 1;
//   }
//   console.log('функция закончилась')

//   return resoult;

//   console.log(1)
// }

// console.log(sobaka([1, 2, 3]));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 1300, quantity: 7 },
//   { name: "Grip", price: 1300, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;

//   for (const product of products) {
//     const values = Object.values(product);
//     if (values.includes(productName)) {
//       totalPrice += product.price * product.quantity;
//     }
//   }

//   return totalPrice
// }

// const cart = {
//   korzina =[],
//   addItem(item) {
//     this.korzina.push(item)
//     return;
//   },
//   removeItem(item) {
//     for (let x of this.korzina) {
//       if (x === item) {
//         const index = this.korzina.indexOf(item)
//         this.korzina.splice(index, 1);
//         return;
//       }
//     }

//   },
//   getTotalPrice(allItem) {
//     let totalPrice = 0;
//     for (const x of this.korzina) {
//       totalPrice += this.korzina['price']
//     }
//     return totalPrice;
//   }
// }

// function xxx(one, ...g) {

//   console.log()
// }

// xxx([1, 2, 3, 4, 5], 1, 2, 3, 4, 5, 6);

// const fnA = function (name) {

//     const f = function (dish) {
//     return console.log(`Повар ${name} готовит ==> ${dish}`);
//     };

//     return f
// }

// const jeka = fnA('Жека')

// jeka('омлет')
// jeka("чай");
// jeka("вареники");
// jeka("торт");

// const fnB = function(values, test) {
//     let resoult = [];

//     for (const el of values) {
//         if (test(el)) {
//             resoult.push(el)
//         }
//     }

//     return resoult
// }

// // const upp = (number) => number >= 3;

// // const btt = (number) => number <= 3;

// console.log(fnB([1, 2, 3, 4, 5], (number) => number >= 3));
// console.log(fnB([1, 2, 3, 4, 5], (number) => number <= 3));

// const x = {
//     players: [
//         { name: "joker", price: 500 },
//         { name: "kaban", price: 800 },
//         { name: "vasya", price: 450 },
//         { name: "kolya", price: 960 },
//     ],

//     getPlayers() {
//         return console.log(this.players)
//     },

//     addPlayer(player) {
//       for (const el of this.players) {
//         if (el.name === player.name) {
//           console.log("такой есть");
//           return;
//         }
//       }
//       this.players.push(player);
//       return;
//     }
// }

// x.getPlayers()

// x.addPlayer({ name: "kolya", price: 960 });

// x.getPlayers()

// x.addPlayer({ name: "kolyasik", price: 960 });

// x.getPlayers();

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// console.log(pizzaPalace.order("Smoked"));

// class StringBuilder {
//   constructor(value) {
//     this.value = value;
//   }

//   getValue() {
//     return this.value;
//   }

//   padStart(str) {
//     // const x = this.value.split('')
//     // x.unshift(str)
//     // this.value = x.join('')

//     this.value = str + this.value
//   }

//   padEnd(str) {
//     // const x = this.value.split("");
//     // x.push(str);
//     // this.value = x.join("");

//     this.value = this.value + str
//   }

//   padBoth(str) {
//     this.padStart(str)
//     this.padEnd(str);
//   }
// }

// const builder = new StringBuilder(".");

// console.log(builder);
// console.log(builder.getValue()); // "."

// builder.padStart("^");
// console.log(builder);
// console.log(builder.getValue()); // "^."

// builder.padEnd("^");
// console.log(builder);
// console.log(builder.getValue()); // "^.^"

// builder.padBoth("=");
// console.log(builder);
// console.log(builder.getValue()); // "=^.^="

// const x = (a, b, callback) => {
//   return callback(a, b)
// }

// const y = (a, b) => {
//   return a * b;
// }

// const r = (a, b) => {
//   return a - b;
// }
// const u = (a, b) => {
//   return a + b;
// }

// const q = (a, b) => {
//   return a / b;
// }

// console.log(x(70, 7, q));

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,

//   addAuthor(el) {
//     const x = [];
//     x.push(this.author)
//     x.push(el)
//     this.author = x
//   }
// };

// book.addAuthor('petya')
// console.log(book);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// const titles = [];

// for (const el of books) {
//   titles.push(el.title)
// }
// console.log(titles);

// let ratings = 0;
// books.forEach(el => {
//   ratings += el.rating;
// })
// console.log((ratings/ books.length).toFixed(1));

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// const filter = (massive) => {
//   massive.forEach(({title, author, rating}) => {
//     console.log(title);
//     console.log(author);
//     console.log(rating);
//  })
// };

// filter(books)



// const main = function (name) {
//   return function (amount) {
//     console.log(`Робітник ${name} отримує в цьому місяці ${amount * 50} долларів!`);
//   }
// }

// const jeka = main('Женя')
// const sasha = main('Саша')
// const liza = main('Ліза')
// const tolik = main('Анатолій')


// jeka(4)
// tolik(10)
// liza(3)
// sasha(5)




// const allTeam = [
//   {
//     name: "Anatolii",
//     age: 23,
//     skill: "HTML, CSS, JS, SCSS",
//     salary: 50,
//   },

//   {
//     name: "Liza",
//     age: 24,
//     skill: "Paint",
//     salary: 60,
//   },

//   {
//     name: "Jeka",
//     age: 22,
//     skill: "HTML, CSS, JS, SCSS",
//     salary: 50,
//   },

//   {
//     name: "Sasha",
//     age: 28,
//     skill: "JS",
//     salary: 70,
//   },
// ];


// allTeam.forEach(({name, salary}) => {
//   console.log(`${name} отримує в день ${salary} $`);
// })


// function xxx(team) {
//   return function (nameWorker) {
//     const obj = team.find((el) => el.name === nameWorker);
//    return `Працівник ${obj.name} отримує ${obj.salary} долларів в день!`;
//   }
// }


// const salary = xxx(allTeam)

// const Anatolii = salary("Anatolii");
// const Liza = salary("Liza");

// console.log(Anatolii);
// console.log(Liza);




// class User {
//   #name

//   constructor(name, age) {
//     this.#name = name;
//     this.age = age;
//   }

//   get name() {
//     return this.#name
//   }
//   set name(newName) {
//     this.#name = newName;
//   }
// }

// const liza = new User('Liza', 24)
// console.log(liza);
// console.log(liza.name);
// liza.name = 'Lizaveta'
// console.log(liza.name);


// const tolik = new User('Tolik', 23)
// console.log(tolik);


// class User {
//   static info = {
//     name: 'Tolyasik',
//     age: 23,
//   };
//   #name
//   constructor(name) {
//     this.#name = name
//   }

//   get name() {
//     return this.#name
//   }

//   set name(newName) {
//     this.#name = newName;
//   }

// }


// const tolik = new User('tolik')
// console.log(tolik);

// console.log(tolik.name);
// tolik.name = User.info.name
// console.log(tolik.name);
// console.log(tolik);




// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   static getMassive() {
//     return User.#takenEmails
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }

//   getMassiveUser() {
//    return User.getMassive()
//   }
// }

// const mango = new User({ email: "mango@mail.com" });
// console.log(mango);

// console.log(User.isEmailTaken("mango@mail.com"));

// console.log(User.isEmailTaken("poly@mail.com"));


// console.log(mango.getMassiveUser());



// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }


// class LastName extends User {
//   #lastName
//   constructor(email, lastName) {
//     super(email)
//     this.#lastName = lastName
//   }

//   get lastName() {
//     return this.#lastName
//   }
//   set lastName(newLastName) {
//     this.#lastName = newLastName;
//   }
// }


// const tolik = new LastName('tolik@mail.com', 'klepach')

// console.log(tolik);

// tolik.email = 'toliklikliklik@mail.com'
// console.log(tolik.email);

// console.log(tolik);

// tolik.lastName = 'KLEPACH'
// console.log(tolik.lastName);
// console.log(tolik);



const mainUl = document.querySelector('ul')
console.log(mainUl);

const newLi = document.createElement('li')
newLi.classList.add('item')

const titleInLiEl = document.createElement('h2')
titleInLiEl.textContent = 'klowns'
const secondUlEl = document.createElement('ul')
secondUlEl.innerHTML = `<li>klown grisha</li><li>klown kolya</li><li>klown tolya</li>`;

newLi.append(titleInLiEl, secondUlEl)

mainUl.prepend(newLi)















































































