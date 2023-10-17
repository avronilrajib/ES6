class Student{
    name;
    id;
    dept;
    batch;
    sec;
    constructor(name,id,dept,batch,sec){
        this.name=name;
        this.id=id;
        this.dept=dept;
        this.batch=batch;
        this.sec=sec;
    }
   allinfo(){
      console.log(`Name: ${this.name}, Id: ${this.id}, Dept: ${this.dept}, Batch: ${this.batch}, Section: ${this.sec}`);
   }
}

let Rajib= new Student("Rajib Dash","221-115-075","CSE",56,"B");
let Sajib= new Student("Sajib Dash","221-115-076","CSE",56,"B");

console.log(Rajib);
console.log(Sajib);

Rajib.allinfo();
Sajib.allinfo();