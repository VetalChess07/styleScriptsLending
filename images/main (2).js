// console.log(decod('arvbacb'));
// /*
// [
//   '(', ')', ')',
//   '(', '(', ')',
//   '('
// ]
// ( > 1
// ) < 1
// */

// function decod(str){
//     let arr = []
//     for(let el of str) {
//         if(str.indexOf(el) !== str.lastIndexOf(el)){
//             arr.push('(')
//         }else{
//             arr.push(')')
//         }
//     }
    
//     return arr
// }

// const arr = [1,2,4,5,6,8,9,11,13,20,21,22,23,24,25,26, 99] 

// // ['1-2', '4-6', '8-9', '11', '13', '20-26']
// function arrIntervals (arr) {
//     let intervals = []
//     let intervalOfIntervals = [arr[0]]
//     for(let i = 1 ; i<arr.length; i++) {
        
//         if(arr[i] === arr[i -1 ] + 1){
//             intervalOfIntervals.push(arr[i])
//         }else{
//             intervals.push(decorArr(intervalOfIntervals))
//             intervalOfIntervals = []
//             intervalOfIntervals.push(arr[i])
//         }
//     }
//     intervals.push(decorArr(intervalOfIntervals))
//     return intervals
// }

// function decorArr(arr){ 
//     return arr.length === 1 ? `${arr[0]}`:  `${arr[0]}-${arr[arr.length - 1]}` 
// } 
    
// console.log(arrIntervals(arr))


// // function sum(a:number, b:number): number{
// //     return a + b
// // }

// // console.log(sum(5, 10));

// const objBoolean = { 
//   a: true, 
//   b: { 
//     c: false, 
//     d: true, 
//     e: { 
//       f: { 
//         g: false, 
//         g2: true, 
//       }, 
//     }, 
//     e2: true, 
//   }, 
//   h: false, 
// }; 

// const objValues = { 
//   a: "vetal", 
//   b: { 
//     c: "chess", 
//     d: "07", 
//     e: { 
//       f: { 
//         g: "front", 
//         g2: "js", 
//       }, 
//     }, 
//     e2: "react", 
//   }, 
//   h: "ts", 
// }; 

// function flatObj(obj){
//     let res = {}
    
//     for(const key in obj){
//         if(typeof obj[key] === 'object' ){
//             res = {...res, ...flatObj(obj[key])}
//         }else{
//             res[key] = obj[key]
//         }
//     }
//     return res
// }

// function isEqual (objBoolean, objValues) {
//     const flatobject1  = flatObj(objBoolean)
//     const flatobject2 = flatObj(objValues)
//     let resArr = []
//     for(let key in flatobject1){
//         if(flatobject1[key] === true && flatobject2[key]){
//             resArr.push(flatobject2[key])
//         }
//     }
//     return resArr
   
// }
// console.log(isEqual(objBoolean,objValues));

// // [vetal chess js react]

// function getTrufValuesOfObj(objValues, objBoolean) { 
//   let res = []; 
 
//   for (const key in objBoolean) { 
//     if (typeof objBoolean[key] === "object") { 
//       res = res.concat(getTrufValuesOfObj(objValues[key], objBoolean[key])); 
//     } else if (objBoolean[key] === true) { 
//       res.push(objValues[key]); 
//     } 
//   } 
 
//   return res; 
// }


// console.log(flatArr([1, [2, [[[15]]], [3, [4, 100]]]]));
// function flatArr (arr) {
//     let flatted = []
//     for(let el of arr){
//         if(Array.isArray(el)){
//             flatted.push(...flatArr(el))
//         }else{
//             flatted.push(el)
//         }
//     }
//     return flatted
// }

// function flatArr (arr) {
//     let stack = arr
//     let result = []
//     while(stack.length > 0){
//     const lastEl = stack.shift()
//   if( Array.isArray(lastEl)){
//       stack.push(...lastEl)
//   }else{
//       result.push(lastEl)
//   }
    
//     }
//     return result
    
// }

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

// function reversed (str) {
//     let newArr = str.split(" ")
//     let splitedWords = []
//     for (let i = 0; i<newArr.length; i++) {
//         if(newArr[i].length >=5) {
//             const word = newArr[i].split('').reverse().join('')
//             splitedWords.push(word)
//         }else{
//             splitedWords.push(newArr[i])
//         }
//     }
//     return splitedWords.join(' ')
// }
// console.log(reversed('Hey fellow warriors'))
// function countDublicate (str) {
//     const map ={}
//     str.toUpperCase().split('').forEach(el => {
//         map[el] = (map[el] || 0) + 1
//     })
//   return Object.values(map).filter(el => el > 1)
  
    
// }
// console.log(countDublicate("abcde"));
// console.log(countDublicate("aabbcde"));
// console.log(countDublicate("aA11"));

// const greatestProduct = (numbers) => {
//     const mustBiggest = numbers.toString()
//     let mustBiggestSum = -Infinity
//     for(let i = 0; i<mustBiggest.length -5 ; i++){
//         const sum = mustBiggest.slice(i, i + 5).split('').reduce((acc, el) => acc * Number(el), 1)
//         mustBiggestSum = Math.max(sum, mustBiggestSum)
//     }
//     return mustBiggestSum
// }

// console.log(greatestProduct(123834539327238239583));

// const product = {
//   молоко: 10,
//   яйца: 6,
//   шоколад: 6,
//   изюм: 10,
// };

// const order = {
//   молоко: 2,
//   яйца: 4,
//   шоколад: 3,
//   изюм: 7,
// };
// const order2 = {
//   молоко: 2,
//   шоколад: 3,
// };
// const order3 = {
//   молоко: 2,
//   шоколад: 10,
// };

//  function products (main, order) {
//      let count = Infinity
//      for(const key in order){
//         if (!product.hasOwnProperty(key)) {
//       return 0; // If an item in the order is not in stock, no products can be made
//     }
       
//              const res = Math.floor(main[key] / order[key])
//             count = Math.min(count, res)
            
         
//      }
//      return count
//  }
// console.log (products(product, order)) 
// console.log (products(product, order2))
// console.log (products(product, order3))

// add(3)()(2)()


// console.log(myFlatArr([1, [2, [[[15]]], [3, [4, 100]]]]));


// // function myFlatArr (arr) {
// //     let newArr = []
// //     for (let el of arr){
// //         if(Array.isArray(el)){
// //             newArr.push(...myFlatArr(el))
// //         }else{
// //             newArr.push(el)
// //         }
// //     }
// //     return newArr
// // }
// function myFlatArr (arr) {
//   const result = []
//   let stack = arr
//   while(stack.length > 0){
//       const cut = stack.shift()
//       if(Array.isArray(cut)){
//           stack.push(...cut)
//       }else{
//           result.push(cut)
//       }
       
//   }
//   return result
// }

// console.log(myFlatArr({
//     a: {
//       b: {
//         c: 1,
//         d: 2,
//         e: 3,
//       },
//       f: {
//         g: 4,
//         h: 5,
//       },
//       i: 6,
//       j: 7,
//     },
//   })); 
// function myFlatArr (object) {
//     let newObj = {}
//     for(let key in object){
//         if(typeof object[key] === 'object'){
//             newObj ={...newObj,...myFlatArr(object[key])}
//         }
//       else{
//             newObj[key] = object[key]
           
//       }
        
//     }
//     return newObj
// }


// const obj = {
//   name: "Иван",
//   age: 55,
//   children: [
//     {
//       name: "Анна",
//       age: 21,
//       children: [
//         {
//           саня: "Анна",
//           age: 7,
//         },
//       ],
//     },
//     {
//       name: "Петр",
//       age: 8,
//     },
//   ],
// };
// console.log(flatObj(obj));

// function flatObj(obj){
//     const {age, children} = obj
//     let count = age
//     if(Array.isArray(children)) {
//         for(const el of children){
//             count += flatObj(el)
//         }
//     }
//     return count
// }


// function flatObj(obj){
//     const {age, children} = obj 
//     let count = age
//     let stack = children
//     while(stack.length > 0){
//         const {age, children} = stack.pop()
//         if(age){
//             count += age
//         }
//         if(children){
//             stack.push(...children)
//         }
//     }
//     return count
// }

// const memo = (fn) =>{
//     const cashe = {}
//     return function(str){
//          if(cashe[str]){
//           return `привет ${str} из кэша !`
//          } else{
//             let res = fn(str) 
//             cashe[str] =res
//             return `привет ${res} !`
//          }
//      }
// }

// const toUpper = (str = "vetal") => str.toUpperCase();
// let res = memo(toUpper); // fn
// console.log(res('vetal')); // return function(str){}
// console.log(res('vetal'));
// console.log(res('vetal'));
// console.log(res('vetal'));

// Array.prototype.mySort = function(cb){
    
//     if(this.length <= 1){
//         return this
//     }
    
//     if(typeof cb !== 'function'){
//         cb = (a, b) => { 
//             if (a < b) return -1; 
//             if (a > b) return 1; 
//             return 0; 
//         }; 
//     }
    
//     const middleIndex = Math.floor(this.length / 2)
//     const middleEl = this[middleIndex]
    
//     const leftArr = []
//     const centerArr = []
//     const rightArr = []
    
//     for (let i = 0; i < this.length; i++) {
//         const currentEl = this[i]
//         if(currentEl > middleEl){
//             rightArr.push(currentEl)
//         }else if(currentEl < middleEl){
//             leftArr.push(currentEl)
//         }else{
//             centerArr.push(currentEl)
//         }
//     }
    
//     return [...leftArr.mySort(cb) , ...centerArr, ...rightArr.mySort(cb)]
    
    
// }


// function insertionSort(array) {
//   for (let i = 1; i < array.length; i++) {
//     let current = array[i];
//     let j = i - 1;
//     while (j >= 0 && array[j] > current) {
//       array[j + 1] = array[j];
//       j--;
//     }
//     array[j + 1] = current;
//   }
//   return array;


// const res = [1,2,9,-199, 9, 9 ,4563, 0, 100, 464].mySort((a,b)=> b - a)
// console.log(res);
// Array.prototype.myMap = 
// function(callback) {
//     let result = []
//     for (let i = 0; i < this.length; i++) {
//         result.push(callback(this[i], i, this))
//     }
//     return result
// }
// function validateScope(str) {
//     const map = {
//         "}": "{",
//         "]": "[",  
//         ")": "(",
//   };
//   const arr = str.split('')
//   let stack = []
//   for(const el of arr) {
//       if(!map[el]){
          
//           stack.push(el)
//       }else{
//     const lastEl = stack.pop()
  
//         if(lastEl !== map[el]) return false
//       }
//   }
//   return stack.length === 0
  
// }


// console.log(validateScope('()[]{}'));
// console.log(validateScope('[{}]'));
// console.log(validateScope('[(){}] }'));
// console.log(validateScope('[(])'));
// function generateMap(pairs) {
//   const map = {};
//   for (const pair of pairs) {
//     map[pair[1]] = pair[0];
//   }
//   return map;
// }

// function validateScope(str) {
//   const pairs = [["(", ")"], ["[", "]"], ["{", "}"]];
//   const map = generateMap(pairs);
//   const stack = [];
//   for (const el of str) {
//     if (Object.values(map).includes(el)) {
//       stack.push(el);
//     } else if (Object.keys(map).includes(el)) {
//       if (stack.length === 0 || stack.pop() !== map[el]) {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// }

// console.log(validateScope("()[]{}")); // true
// console.log(validateScope("[{}]")); // true
// console.log(validateScope("[(){}] }")); // false
// console.log(validateScope("[(])")); // false

// function compose(...func){
//     return function(data, ...args){
//         return func.reduceRight((acc, fn) => fn(acc, ...args), data )
//     }
// }

// function filterArr(arr) {
//   return arr.filter((el) => typeof (el) === "number");
// }
// function multbyNumber(arr, n) {
//   return arr.map((el) => el * n);
// }
// function sortArr(arr, flag) {
//   return flag ? arr.filter((a, b) => a - b) : arr.filter((a, b) => b - a);
// }


// const arr = [1, 0, 100, "fsff", -134134143, 89, NaN, undefined, ""];

// const res = compose(filterArr, multbyNumber, sortArr);
// const sortedAscending = res(arr, 2, true); // сортировка по возрастанию
// const sortedDescending = res(arr, 2, false); // сортировка по убыванию

// console.log(sortedDescending, sortedAscending);

Array.prototype.sumArray = function () {
  return this.reduce((acc, el) => acc + el, 0);
};

function centerElSumOfArr(arr) {
  for (const i in arr) {
    const index = parseInt(i, 10); // Преобразуем i в число с основанием 10

    const sumLeft = arr.slice(0, index).sumArray();
    const sumRight = arr.slice(index + 1).sumArray();

    if (index === 0 && arr[index] === sumRight) {
      return index;
    } else if (index === arr.length - 1 && arr[index] === sumLeft) {
      return index;
    } else if (arr[index] === sumLeft && arr[index] === sumRight) {
      return index;
    }
  }

  return -1; // Если нет элемента, удовлетворяющего условию
}
                                    
// console.log(centerElSumOfArr([1, 2, 3, 3])); // 2
// console.log(centerElSumOfArr([10, 2, 5, 3])); // 0
// console.log(centerElSumOfArr([2, 5, 3, 10])); // 3
// console.log(centerElSumOfArr([100, 100, 99, 1])); // 1
 
 function sum(...args){
     // [5,7,4]
   return (cb) => {
      return args.map(el) => cb(el, 2))
   }
 }
 
const res = sum(5, 7, 4);

function myltBY(el, num) {
  console.log(el, num);
  return el * num;
}

console.log(res(myltBY));




