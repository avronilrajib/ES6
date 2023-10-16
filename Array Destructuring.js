//ES6 Class Number 8
//Array Destructuring

const array=[1,2,3,4,5,6];
const [a,b,c,d,e,f]=array;
console.log(a,b,c,d,e,f);

const name=["Rajib","avronil","arnab","saurov","proyash"];
const [rajib,avronil,...z]=name;
console.log(rajib,avronil,z);
