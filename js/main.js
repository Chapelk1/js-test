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


const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (let object of atTheOldToad.potions) {
      if (object.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }

    this.potions.push(newPotion);
  },

  removePotion(potionName) {
    for (let i = 0; i < atTheOldToad.potions.length; i += 1) {
      const values = Object.values(atTheOldToad.potions[i]);
      if (values.includes(potionName)) {
        this.potions.splice(i, 1);
      }
    }

    return `Potion ${potionName} is not in inventory!`;
  },

  updatePotionName(oldName, newName) {
    for (let i = 0; i < atTheOldToad.potions.length; i += 1) {
      const y = Object.values(atTheOldToad.potions[i]);
        if (y.includes(oldName)) {
            this.potions[i].name = newName;
            return
      }
      }
      return `Potion ${oldName} is not in inventory!`;
    
  },
  // Change code above this line
};



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