// ES6 Class Number 2
//Default Function Parameters

//ES5
function say(ms){
    sm = typeof ms !== "undefined" ? ms:"hello!";
    console.log(sm);

}
say();
say("HI this is Rajib");

//ES6
function Hello(massage="Hello "){
    console.log(massage);
}
Hello();
Hello("How Are You Rajib? ");