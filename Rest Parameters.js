//ES6 Class Number 3
//Rest Parameters

function rest(...number){
  console.log(number);
}
rest(1,2,3,4,5,6,7,8,9);

function Rest(a,b,...args){
    console.log(a,b,args);
}
Rest(1,2,3,4,5,6,7,8,9,11,2,22,33,44,55,6,6,77,88,99);